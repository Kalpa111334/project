import React from 'react';
import { cn } from '../../lib/utils';

interface PrawnIconProps {
  index: number;
  total: number;
  size?: number;
  color?: string;
}

export default function PrawnIcon({ index, total, size = 24, color = '#FF6B6B' }: PrawnIconProps) {
  const angle = (index * 360) / total;
  const radius = 80; // Distance from center
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;

  return (
    <div
      className={cn(
        'absolute transform -translate-x-1/2 -translate-y-1/2',
        'transition-opacity duration-300'
      )}
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        color: color,
        fontSize: `${size}px`,
        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
      }}
    >
      🦐
    </div>
  );
}