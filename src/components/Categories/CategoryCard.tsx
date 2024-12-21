import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  image: string;
  description: string;
  link: string;
}

export default function CategoryCard({ title, image, description, link }: CategoryCardProps) {
  return (
    <Link 
      to={link}
      className="group relative overflow-hidden rounded-lg aspect-square"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <div className="absolute bottom-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-200 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
}