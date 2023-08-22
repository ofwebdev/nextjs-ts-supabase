import Image from "next/image";
import MainLayout from "./layouts/MainLayout";
import BannerSlider from "./components/BannerSlider";
import Product from "./components/Product";

interface Product {
  id: number;
  title: string;
  url: string;
  price: number;
  description: string;
}

export default function Home() {
  const products: Product[] = [
    // Notice the [] to create an array of products
    {
      id: 1,
      title: "lol",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMb_5WYVE06FQBGBBL37o1HvUzpytlhUV3hw&usqp=CAU",
      price: 10,
      description: "lol",
    },
    {
      id: 2,
      title: "lol",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMb_5WYVE06FQBGBBL37o1HvUzpytlhUV3hw&usqp=CAU",
      price: 10,
      description: "lol",
    },
    // Add more products here if needed
  ];
  return (
    <MainLayout>
      <BannerSlider />

      <div className="max-w-[1200px] mx-auto">
        <div className="text-2xl font-bold mt-4 mb-6 px-4">Products</div>

        <div className="grid grid-cols-5 gap-4">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
