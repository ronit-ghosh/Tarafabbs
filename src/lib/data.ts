// Navigation Links
export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Collections', href: '/collections' },
  { label: 'New Arrivals', href: '/new-arrivals' },
  { label: 'Bestsellers', href: '/bestsellers' },
  { label: 'Our Artisans', href: '/artisans' },
  { label: 'About Us', href: '/about' }
];

// Product Categories
export const categoryData = [
  {
    id: 1,
    name: 'Silk Sarees',
    slug: 'silk-sarees',
    description: 'Luxurious silk sarees with intricate designs',
    image: 'https://images.pexels.com/photos/11679556/pexels-photo-11679556.jpeg'
  },
  {
    id: 2,
    name: 'Cotton Sarees',
    slug: 'cotton-sarees',
    description: 'Breathable cotton sarees for everyday elegance',
    image: 'https://images.pexels.com/photos/1805412/pexels-photo-1805412.jpeg'
  },
  {
    id: 3,
    name: 'Tussor Sarees',
    slug: 'tussor-sarees',
    description: 'Naturally textured tussor silk with rustic charm',
    image: 'https://images.pexels.com/photos/7138406/pexels-photo-7138406.jpeg'
  },
  {
    id: 4,
    name: 'Block Print',
    slug: 'block-print',
    description: 'Traditional block printed designs with natural dyes',
    image: 'https://images.pexels.com/photos/7148670/pexels-photo-7148670.jpeg'
  },
  {
    id: 5,
    name: 'Kalamkari',
    slug: 'kalamkari',
    description: 'Intricate hand-painted storytelling on fabric',
    image: 'https://images.pexels.com/photos/12814967/pexels-photo-12814967.jpeg'
  },
  {
    id: 6,
    name: 'Batik',
    slug: 'batik',
    description: 'Wax-resist dyeing for distinctive patterns',
    image: 'https://images.pexels.com/photos/5797999/pexels-photo-5797999.jpeg'
  },
];

export interface ProductTypes {

  id: string
  name: string
  category: string
  originalPrice: number
  discountPrice: number
  discount: number
  images: string[]
  inStock: boolean
  rating: number
  reviewCount: number

}

// Featured Products
export const featuredProducts = [
  {
    id: 'p1',
    name: 'Kanchipuram Silk Saree with Gold Zari Border',
    category: 'Silk Sarees',
    originalPrice: 12500,
    discountPrice: 10000,
    discount: 20,
    images: [
      'https://images.pexels.com/photos/11679545/pexels-photo-11679545.jpeg',
      'https://images.pexels.com/photos/11679552/pexels-photo-11679552.jpeg',
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 42
  },
  {
    id: 'p2',
    name: 'Hand Block Printed Organic Cotton Saree',
    category: 'Cotton Sarees',
    originalPrice: 3500,
    discountPrice: 3500,
    discount: 0,
    images: [
      'https://images.pexels.com/photos/7148498/pexels-photo-7148498.jpeg',
      'https://images.pexels.com/photos/7148670/pexels-photo-7148670.jpeg',
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 28,
  },
  {
    id: 'p3',
    name: 'Natural Dyed Tussor Silk with Madhubani Art',
    category: 'Tussor Sarees',
    originalPrice: 7800,
    discountPrice: 6500,
    discount: 17,
    images: [
      'https://images.pexels.com/photos/7138406/pexels-photo-7138406.jpeg',
      'https://images.pexels.com/photos/7138435/pexels-photo-7138435.jpeg',
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 36,
  },
  {
    id: 'p4',
    name: 'Kalamkari Hand-Painted Pure Cotton Saree',
    category: 'Cotton Sarees',
    originalPrice: 4500,
    discountPrice: 3800,
    discount: 16,
    images: [
      'https://images.pexels.com/photos/12814967/pexels-photo-12814967.jpeg',
      'https://images.pexels.com/photos/12815159/pexels-photo-12815159.jpeg',
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 32
  },
  {
    id: 'p5',
    name: 'Banarasi Silk Wedding Collection Saree',
    category: 'Silk Sarees',
    originalPrice: 18500,
    discountPrice: 15800,
    discount: 15,
    images: [
      'https://images.pexels.com/photos/11679446/pexels-photo-11679446.jpeg',
      'https://images.pexels.com/photos/11679556/pexels-photo-11679556.jpeg',
    ],
    inStock: true,
    rating: 5.0,
    reviewCount: 54
  },
  {
    id: 'p6',
    name: 'Traditional Batik Print Linen Cotton Blend',
    category: 'Cotton Sarees',
    originalPrice: 4200,
    discountPrice: 4200,
    discount: 0,
    images: [
      'https://images.pexels.com/photos/5797908/pexels-photo-5797908.jpeg',
      'https://images.pexels.com/photos/5797999/pexels-photo-5797999.jpeg',
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 24
  },
  {
    id: 'p7',
    name: 'Handwoven Bhagalpuri Tussor Silk',
    category: 'Tussor Sarees',
    originalPrice: 6800,
    discountPrice: 5900,
    discount: 13,
    images: [
      'https://images.pexels.com/photos/13220673/pexels-photo-13220673.jpeg',
      'https://images.pexels.com/photos/13220670/pexels-photo-13220670.jpeg',
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 31
  },
  {
    id: 'p8',
    name: 'Ajrakh Block Print Handcrafted Cotton',
    category: 'Cotton Sarees',
    originalPrice: 3800,
    discountPrice: 3200,
    discount: 16,
    images: [
      'https://images.pexels.com/photos/1805412/pexels-photo-1805412.jpeg',
      'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg',
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 27,
  },
];

// Cart Items (Mock data)
export const cartItems = [
  {
    id: 'cart1',
    name: 'Kanchipuram Silk Saree with Gold Zari Border',
    variant: 'Pink / 5.5m',
    price: 10000,
    quantity: 1,
    image: 'https://images.pexels.com/photos/11679545/pexels-photo-11679545.jpeg'
  },
  {
    id: 'cart2',
    name: 'Hand Block Printed Organic Cotton Saree',
    variant: 'Indigo / 5.5m',
    price: 3500,
    quantity: 1,
    image: 'https://images.pexels.com/photos/7148498/pexels-photo-7148498.jpeg'
  },
  {
    id: 'cart3',
    name: 'Kalamkari Hand-Painted Pure Cotton Saree',
    variant: 'Red / 5.5m',
    price: 3800,
    quantity: 1,
    image: 'https://images.pexels.com/photos/12814967/pexels-photo-12814967.jpeg'
  }
];

// Testimonials
export const testimonials = [
  {
    id: 't1',
    name: 'Priya Sharma',
    location: 'New Delhi, India',
    quote: 'The craftsmanship of my Kanchipuram silk saree from TARAFABBS is extraordinary. The attention to detail in the weaving and the quality of silk make it a true heirloom piece that I will cherish forever.',
  },
  {
    id: 't2',
    name: 'Ananya Patel',
    location: 'Mumbai, India',
    quote: 'I received countless compliments on my Kalamkari saree from TARAFABBS. The hand-painted details are so intricate and beautiful, and the natural colors are vibrant without being overwhelming.',
  },
  {
    id: 't3',
    name: 'Meera Reddy',
    location: 'Bangalore, India',
    quote: 'TARAFABBS commitment to supporting traditional artisans is evident in every piece. My Batik cotton saree not only looks stunning but also tells a story of incredible craftsmanship and cultural heritage.'
  },
  {
    id: 't4',
    name: 'Divya Krishnan',
    location: 'Chennai, India',
    quote: 'The Block Print saree I purchased is not only beautiful but also incredibly comfortable. I appreciate TARAFABBS focus on sustainable practices and supporting local artisans while delivering exceptional quality.'
  }
];