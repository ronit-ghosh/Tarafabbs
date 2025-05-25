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
export const  categoryData = [
  {
    id: 1,
    name: 'Silk Sarees',
    slug: 'silk-sarees',
    description: 'Luxurious silk sarees with intricate designs',
    image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1748125553/silk5_rsfbrv.jpg'
  },
  {
    id: 2,
    name: 'Hand Painted Sarees',
    slug: 'hand-painted-sarees',
    description: 'Breathable cotton sarees for everyday elegance',
    image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1748125547/silk3_nutvuq.jpg'
  },
  {
    id: 3,
    name: 'Tussor Sarees',
    slug: 'tussor-sarees',
    description: 'Naturally textured tussor silk with rustic charm',
    image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1748125547/tussor5_wf0pwf.jpg'
  },
  {
    id: 4,
    name: 'Kalamkari',
    slug: 'kalamkari',
    description: 'Intricate hand-painted storytelling on fabric',
    image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1748125534/tussor7_jmbckf.jpg'
  },
  {
    id: 5,
    name: 'Batik',
    slug: 'batik',
    description: 'Wax-resist dyeing for distinctive patterns',
    image: 'https://res.cloudinary.com/drynqkitl/image/upload/v1748125528/orange-silk_xxgwh7.jpg'
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
    name: 'Batik Silk Saree',
    category: 'Silk Sarees',
    originalPrice: 12500,
    discountPrice: 10000,
    discount: 20,
    images: [
      'https://res.cloudinary.com/drynqkitl/image/upload/v1748125541/pink-silk_vvjjnd.jpg',
      'https://res.cloudinary.com/drynqkitl/image/upload/v1748125549/pink4_sxlric.jpg',
      'https://res.cloudinary.com/drynqkitl/image/upload/v1748125558/pink3_rmrmvi.jpg',
      'https://res.cloudinary.com/drynqkitl/image/upload/v1748125532/pink2_ezx9r2.jpg',

    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 42
  },
  {
    id: 'p2',
    name: 'Batik Silk Saree',
    category: 'Silk Sarees',
    originalPrice: 12500,
    discountPrice: 10000,
    discount: 20,
    images: [
      'https://res.cloudinary.com/drynqkitl/image/upload/v1748125528/orange-silk_xxgwh7.jpg',
      'https://res.cloudinary.com/drynqkitl/image/upload/v1748125517/orange2_bigkez.jpg',
      'https://res.cloudinary.com/drynqkitl/image/upload/v1748125524/orange3_rrsr8o.jpg',
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 42
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