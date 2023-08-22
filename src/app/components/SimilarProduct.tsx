import React from "react";
import Product from "./Product";
import { BiLoader } from "react-icons/bi";

interface Product {
  id: number;
  title: string;
  url: string;
  price: number;
  description: string;
}

export default function SimilarProduct() {
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
    <div>
      <div className="border-b py-1 max-w-[1200px] mx-auto" />

      <div className="max-w-[1200px] mx-auto">
        <div className="font-bold text-2xl py-2 mt-4">
          Similar sponsored items
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-5 gap-4">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center gap-4 font-semibold">
              <BiLoader size={30} className="text-blue-400 animate-spin" />
              Loading Products...
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
