import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { sliderData, SliderItem } from '../../data/sliderData';
import './ImageSlider.css';

const ImageSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  const renderSlide = (slide: SliderItem, index: number) => {
    const isActive = index === currentSlide;
    const slideClass = isActive ? 'slide active' : 'slide';
    const animationClass = isActive
      ? direction === 'right'
        ? 'slide-in-right'
        : 'slide-in-left'
      : '';

    return (
      <div
        key={slide.id}
        className={`${slideClass} ${animationClass}`}
        onAnimationEnd={handleAnimationEnd}
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="slide-content">
          <h2 className="slide-title">{slide.title}</h2>
          <p className="slide-description">{slide.description}</p>
          <Link to={slide.buttonLink} className="slide-button">
            {slide.buttonText}
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {sliderData.map((slide, index) => renderSlide(slide, index))}
      </div>

      <button
        className="slider-button prev"
        onClick={prevSlide}
        disabled={isAnimating}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="slider-button next"
        onClick={nextSlide}
        disabled={isAnimating}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="slider-dots">
        {sliderData.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => {
              if (isAnimating) return;
              setDirection(index > currentSlide ? 'right' : 'left');
              setIsAnimating(true);
              setCurrentSlide(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
