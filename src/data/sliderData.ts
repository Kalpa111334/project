export interface SliderItem {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export const sliderData: SliderItem[] = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/3296392/pexels-photo-3296392.jpeg',
    title: 'Fresh Catch of the Day',
    description: 'Discover our premium selection of fresh seafood, caught daily from local waters.',
    buttonText: 'Shop Fresh Catch',
    buttonLink: '/products?category=fresh'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/2827263/pexels-photo-2827263.jpeg',
    title: 'Premium Lobster Selection',
    description: 'Indulge in our premium lobster collection, perfect for special occasions.',
    buttonText: 'View Lobsters',
    buttonLink: '/products?category=lobster'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/3731945/pexels-photo-3731945.jpeg',
    title: 'Wild-Caught Prawns',
    description: 'Savor the taste of our sustainably sourced, wild-caught prawns.',
    buttonText: 'Explore Prawns',
    buttonLink: '/products?category=prawns'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/3843224/pexels-photo-3843224.jpeg',
    title: 'Premium Salmon',
    description: 'Experience the rich flavor of our premium quality salmon.',
    buttonText: 'Shop Salmon',
    buttonLink: '/products?category=salmon'
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg',
    title: 'Specialty Seafood',
    description: 'Explore our unique selection of specialty seafood items.',
    buttonText: 'Discover More',
    buttonLink: '/products?category=specialty'
  }
];
