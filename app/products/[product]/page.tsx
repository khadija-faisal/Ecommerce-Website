import ProductData from "@/storeproducts/data";
import ProductDetail from "@/components/productdetail";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const slug = (await params).product;
  const product = ProductData.find((post) => post.id === parseInt(slug));

  if (!product) {
    return notFound();
  }
  return (
    <div className="bg-white">
      <ProductDetail
        key={product.id}
        image={product.image}
       rating={product.rating}
        title={product.title}
        description={product.description}
        price={product.price}
      />
 
    </div>
  );
}