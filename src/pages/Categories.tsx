import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/seafoodProducts';

const categoryImages = {
  'Premium Fish': 'https://images.pexels.com/photos/3843224/pexels-photo-3843224.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
  'Shellfish': 'https://images.pexels.com/photos/3731945/pexels-photo-3731945.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
  'Crustaceans': 'https://images.pexels.com/photos/2827263/pexels-photo-2827263.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
  'Mollusks': 'https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
  'Specialty Items': 'https://images.pexels.com/photos/11267149/pexels-photo-11267149.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
};

const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Categories</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/products?category=${category}`}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={categoryImages[category as keyof typeof categoryImages]}
                alt={category}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-2xl font-bold text-white text-center px-4">
                  {category}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
