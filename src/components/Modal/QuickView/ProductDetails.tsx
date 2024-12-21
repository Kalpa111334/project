import React, { useState } from 'react';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { Product } from '../../../types';

interface ProductDetailsProps {
  product: Product;
  onAddToCart: (productId: string, quantity: number) => void;
  onClose: () => void;
}

export default function ProductDetails({ product, onAddToCart, onClose }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(product.id, quantity);
    onClose();
  };

  return (
    <div className="flex flex-col h-full">
      <h2 id="modal-title" className="text-2xl font-bold mb-2">{product.name}</h2>
      <p className="text-2xl font-bold text-[#1B4965] mb-4">
        ${product.price.toFixed(2)}
      </p>

      <div className="prose prose-sm mb-6">
        <p>{product.description}</p>
        {product.features?.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </div>

      <div className="mt-auto">
        <div className="flex items-center gap-4 mb-4">
          <span className="font-medium">Quantity:</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              disabled={quantity <= 1}
              className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-8 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
              disabled={quantity >= product.stock}
              className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className="w-full py-3 bg-[#1B4965] text-white rounded-lg hover:bg-[#1B4965]/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
        >
          <ShoppingCart className="h-5 w-5" />
          Add to Cart
        </button>

        {product.stock <= 5 && product.stock > 0 && (
          <p className="text-sm text-orange-600 mt-2">
            Only {product.stock} left in stock!
          </p>
        )}
      </div>
    </div>
  );
}