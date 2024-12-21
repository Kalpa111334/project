export interface SliderImage {
  id: number;
  url: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  price?: string;
  category?: string;
  imageAlt?: string;
}

export const sliderImages: SliderImage[] = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/3843224/pexels-photo-3843224.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
    title: 'Fresh Atlantic Salmon',
    description: 'Premium Norwegian salmon fillets, expertly cut and ready for your favorite recipes.',
    ctaText: 'Shop Fresh Salmon',
    ctaLink: '/products/salmon',
    price: 'From $24.99/lb',
    category: 'Premium Fish',
    imageAlt: 'Fresh raw salmon fillet with herbs and lemon'
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/2827263/pexels-photo-2827263.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
    title: 'Live Maine Lobster',
    description: 'Wild-caught Maine lobsters, kept live in our tanks for maximum freshness.',
    ctaText: 'Order Live Lobster',
    ctaLink: '/products/lobster',
    price: 'From $29.99/lb',
    category: 'Live Shellfish',
    imageAlt: 'Fresh live Maine lobster with claws'
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/2871757/pexels-photo-2871757.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
    title: 'Premium Tuna Selection',
    description: 'Sashimi-grade tuna, perfect for sushi and sashimi. Sourced from sustainable fisheries.',
    ctaText: 'View Tuna Options',
    ctaLink: '/products/tuna',
    price: 'From $39.99/lb',
    category: 'Sushi Grade',
    imageAlt: 'Fresh tuna steaks arranged on ice'
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/1683545/pexels-photo-1683545.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
    title: 'Fresh Oysters Daily',
    description: 'Fresh oysters from both East and West coasts, shucked to order.',
    ctaText: 'Order Fresh Oysters',
    ctaLink: '/products/oysters',
    price: '$24.99/dozen',
    category: 'Raw Bar',
    imageAlt: 'Fresh oysters on ice with lemon wedges'
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/8340112/pexels-photo-8340112.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
    title: 'Alaskan Snow Crab',
    description: 'Sweet, succulent snow crab legs, pre-cooked and ready to crack.',
    ctaText: 'Get Snow Crab',
    ctaLink: '/products/crab',
    price: 'From $44.99/lb',
    category: 'Prepared Shellfish',
    imageAlt: 'Cooked snow crab legs arranged on ice'
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/3731945/pexels-photo-3731945.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1',
    title: 'Wild-Caught Shrimp',
    description: 'Premium wild-caught shrimp, perfect for grilling or seafood boils.',
    ctaText: 'Shop Shrimp',
    ctaLink: '/products/shrimp',
    price: 'From $19.99/lb',
    category: 'Shellfish',
    imageAlt: 'Fresh raw shrimp arranged on ice'
  }
];
