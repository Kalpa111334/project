import React, { useEffect, useRef } from 'react';
import { X, ShoppingCart, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import './QuickView.css';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
}

interface QuickViewProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const QuickView: React.FC<QuickViewProps> = ({ product, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!product) return null;

  return (
    <div className={`quick-view-overlay ${isOpen ? 'active' : ''}`}>
      <div
        ref={modalRef}
        className={`quick-view-modal ${isOpen ? 'active' : ''}`}
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="quick-view-close"
          aria-label="Close quick view"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="quick-view-content">
          <div className="quick-view-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="quick-view-details">
            <div className="quick-view-category">{product.category}</div>
            <h2 className="quick-view-title">{product.name}</h2>
            <div className="quick-view-price">
              LKR {product.price.toLocaleString('en-LK')}
            </div>
            <p className="quick-view-description">{product.description}</p>

            <div className="quick-view-stock">
              <span className={product.stock > 0 ? 'in-stock' : 'out-of-stock'}>
                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
              </span>
              {product.stock > 0 && (
                <span className="stock-count">
                  {product.stock} units available
                </span>
              )}
            </div>

            <div className="quick-view-actions">
              <button
                className="add-to-cart"
                disabled={product.stock === 0}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
              <button className="add-to-wishlist">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            <Link
              to={`/products/${product.id}`}
              className="view-full-details"
              onClick={onClose}
            >
              View Full Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
