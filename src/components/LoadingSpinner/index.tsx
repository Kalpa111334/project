import React from 'react';
import { cn } from '../../lib/utils';
import PrawnIcon from './PrawnIcon';
import './styles.css';

interface LoadingSpinnerProps {
  /** Number of prawns to display (default: 8) */
  prawnCount?: number;
  /** Rotation speed in seconds (default: 2) */
  speed?: number;
  /** Spinner diameter in pixels (default: 200) */
  size?: number;
  /** Center text (default: "Welcome") */
  text?: string;
  /** Text color (default: #1B4965) */
  textColor?: string;
  /** Text size in pixels (default: 18) */
  textSize?: number;
  /** Font family for text */
  fontFamily?: string;
  /** Array of colors for prawns */
  prawnColors?: string[];
  /** Size of individual prawns in pixels (default: 24) */
  prawnSize?: number;
  /** Additional CSS classes */
  className?: string;
  /** Whether the spinner is exiting/unmounting */
  isExiting?: boolean;
}

export default function LoadingSpinner({
  prawnCount = 8,
  speed = 2,
  size = 200,
  text = "Welcome",
  textColor = "#1B4965",
  textSize = 18,
  fontFamily,
  prawnColors,
  prawnSize = 24,
  className,
  isExiting = false,
}: LoadingSpinnerProps) {
  const defaultColors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4',
    '#FFEEAD', '#D4A5A5', '#9FA8DA', '#FFD93D'
  ];

  const colors = prawnColors || defaultColors;

  return (
    <div
      className={cn(
        'spinner-container relative',
        isExiting && 'exit',
        className
      )}
      style={{ 
        width: size, 
        height: size,
        '--rotation-speed': `${speed}s`
      } as React.CSSProperties}
      role="progressbar"
      aria-label="Loading"
      aria-valuetext={text}
    >
      <div className="spinner absolute inset-0">
        {Array.from({ length: prawnCount }).map((_, i) => (
          <PrawnIcon
            key={i}
            index={i}
            total={prawnCount}
            size={prawnSize}
            color={colors[i % colors.length]}
          />
        ))}
      </div>
      
      {text && (
        <div
          className="spinner-text absolute inset-0 flex items-center justify-center"
          style={{
            color: textColor,
            fontSize: textSize,
            fontFamily,
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
}