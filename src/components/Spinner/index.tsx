import React from 'react';
import './styles.css';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  speed?: 'slow' | 'normal' | 'fast';
}

const sizeMap = {
  sm: 64,
  md: 96,
  lg: 128,
};

const speedMap = {
  slow: 3,
  normal: 2.5,
  fast: 2,
};

export default function Spinner({ 
  size = 'md',
  speed = 'normal'
}: SpinnerProps) {
  const positions = [
    { rotate: '0deg', translate: '50%' },
    { rotate: '120deg', translate: '50%' },
    { rotate: '240deg', translate: '50%' },
  ];

  return (
    <div 
      className="prawn-spinner"
      style={{ 
        '--spinner-size': `${sizeMap[size]}px`,
        '--rotation-duration': `${speedMap[speed]}s`
      } as React.CSSProperties}
      role="status"
      aria-label="Loading"
    >
      <div className="prawn-spinner__ring">
        {positions.map((pos, i) => (
          <svg
            key={i}
            className="prawn-spinner__prawn"
            style={{
              transform: `
                rotate(${pos.rotate})
                translateY(-${pos.translate})
              `
            }}
            viewBox="0 0 24 24"
          >
            <use href="#prawn" />
          </svg>
        ))}
      </div>
    </div>
  );
}