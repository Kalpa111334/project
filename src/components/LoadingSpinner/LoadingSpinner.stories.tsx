import React from 'react';
import LoadingSpinner from './index';

export default {
  title: 'Components/LoadingSpinner',
  component: LoadingSpinner,
};

export const Default = () => <LoadingSpinner />;

export const CustomStyling = () => (
  <LoadingSpinner
    prawnCount={12}
    speed={3}
    size={300}
    text="Loading..."
    textColor="#2A9D8F"
    textSize={24}
    fontFamily="Georgia, serif"
    prawnSize={32}
    prawnColors={['#2A9D8F', '#E9C46A', '#F4A261', '#E76F51']}
  />
);

export const Minimal = () => (
  <LoadingSpinner
    prawnCount={6}
    size={150}
    text=""
    speed={1.5}
  />
);