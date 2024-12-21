import React from 'react';
import { Anchor, ShieldCheck, Truck } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">About Lellama Online</h1>
      
      <div className="prose max-w-3xl mx-auto mb-16">
        <p className="text-lg text-gray-700 mb-8">
          Founded in 2024, Lellama Online has become the premier destination for fresh, 
          sustainably sourced seafood delivered directly to your door. Our mission is to 
          make high-quality seafood accessible to everyone while maintaining the highest 
          standards of freshness and sustainability.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <ShieldCheck className="h-12 w-12 text-[#1B4965]" />
            </div>
            <h3 className="font-semibold mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600">
              Every product meets our strict quality standards before reaching your kitchen.
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Anchor className="h-12 w-12 text-[#1B4965]" />
            </div>
            <h3 className="font-semibold mb-2">Sustainable Sourcing</h3>
            <p className="text-gray-600">
              We partner with responsible fisheries to protect our oceans for future generations.
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Truck className="h-12 w-12 text-[#1B4965]" />
            </div>
            <h3 className="font-semibold mb-2">Fresh Delivery</h3>
            <p className="text-gray-600">
              Guaranteed fresh delivery within 24 hours in our service areas.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Our Commitment</h2>
        <p className="text-lg text-gray-700 mb-8">
          We're committed to providing the freshest seafood while supporting sustainable 
          fishing practices. Our team of experts carefully selects each product, ensuring 
          you receive only the highest quality seafood for your table.
        </p>
      </div>
    </div>
  );
}