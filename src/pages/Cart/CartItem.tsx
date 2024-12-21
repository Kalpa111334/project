import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Product } from '../../types';

interface CartItemProps {
  product: Product;
  quantity: number;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

export default function CartItem({ product, quantity, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <img
        src={product.image}
        alt={product.name}
        className="w-24 h-24 object-cover rounded"
      />
      <div className="flex-grow">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onUpdateQuantity(product.id, quantity - 1)}
          disabled={quantity <= 1}
          className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-8 text-center">{quantity}</span>
        <button
          onClick={() => onUpdateQuantity(product.id, quantity + 1)}
          disabled={quantity >= product.stock}
          className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <div className="w-24 text-right">
        ${(product.price * quantity).toFixed(2)}
      </div>
      <button
        onClick={() => onRemove(product.id)}
        className="p-2 text-red-600 hover:bg-red-50 rounded"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  );
}