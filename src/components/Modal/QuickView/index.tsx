import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import ProductGallery from './ProductGallery';
import ProductDetails from './ProductDetails';
import { Product } from '../../../types';
import { useEscapeKey } from '../../../hooks/useEscapeKey';
import { cn } from '../../../lib/utils';

interface QuickViewProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (productId: string, quantity: number) => void;
}

export default function QuickView({ product, isOpen, onClose, onAddToCart }: QuickViewProps) {
  useEscapeKey(onClose);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={cn(
          "relative w-full max-w-2xl bg-white shadow-xl transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="h-full overflow-y-auto">
          <div className="grid md:grid-cols-2 gap-6 p-6">
            <ProductGallery images={product.images} title={product.name} />
            <ProductDetails
              product={product}
              onAddToCart={onAddToCart}
              onClose={onClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
}