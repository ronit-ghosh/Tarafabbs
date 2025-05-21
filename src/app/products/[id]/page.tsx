// /app/products/[id]/page.js
import { featuredProducts } from '@/lib/data';
import ProductDetail from '@/components/product/ProductDetails';

// This function tells Next.js which routes to pre-generate at build time
export function generateStaticParams() {
  return featuredProducts.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = featuredProducts.find(p => p.id === id);

  return <ProductDetail product={product!} />;
}