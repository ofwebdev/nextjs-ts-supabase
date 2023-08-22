import React from "react";
import MainLayout from "../layouts/MainLayout";
import SimilarProduct from "../components/SimilarProduct";
import CartItems from "../components/CartItems";

function page() {
  const product = {
    id: 1,
    title: "lol",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMb_5WYVE06FQBGBBL37o1HvUzpytlhUV3hw&usqp=CAU",
    price: 10,
    description: "lol",
  };
  return (
    <MainLayout>
      <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
        <div className="text-2xl font-bold my-4">Shopping cart</div>
        <div className="relative flex items-baseline justify-between gap-2">
          {/* <ClientOnly> */}
          <div className="w-[65%]">
            {/* {cart.getCart().map((product) => ( */}
            <CartItems key={product.id} product={product} />
            {/* ))} */}
          </div>
          {/* </ClientOnly> */}

          <div
            id="GoToCheckout"
            className="md:w-[33%] absolute top-0 right-0 m-2"
          >
            {/* <ClientOnly> */}
            <div className="bg-white p-4 border">
              <button
                //   onClick={() => goToCheckout()}
                className="flex items-center justify-center bg-blue-600 w-full text-white font-semibold p-3 rounded-full mt-4"
              >
                Go to checkout
              </button>

              <div className="flex items-center justify-between mt-4 text-sm mb-1">
                {/* <div>Items ({cart.getCart().length})</div> */}
                {/* <div>£{(cart.cartTotal() / 100).toFixed(2)}</div> */}
              </div>
              <div className="flex items-center justify-between mb-4 text-sm">
                <div>Shipping:</div>
                <div>Free</div>
              </div>

              <div className="border-b border-gray-300" />

              <div className="flex items-center justify-between mt-4 mb-1 text-lg font-semibold">
                <div>Subtotal</div>
                {/* <div>£{(cart.cartTotal() / 100).toFixed(2)}</div> */}
              </div>
            </div>
            {/* </ClientOnly> */}
          </div>
        </div>
      </div>

      <SimilarProduct />
    </MainLayout>
  );
}

export default page;
