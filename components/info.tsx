"use client";

import { ShoppingCart } from "lucide-react";

import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Product } from "@/types";
import useCart from "@/hooks/use-cart";
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, PromiseLikeOfReactNode } from "react";

interface InfoProps {
  data: Product
};

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-3">
          <div className="text-gray-500">Category:</div>
          <div className="text-gray-900 font-semibold">{data.category?.name}</div>
        </div>
        <div className="flex items-center gap-x-3">
          <div className="text-gray-500">Description:</div>
          <div className="text-gray-900 font-semibold">{data.description}</div>
        </div>
        {data.dynamicFields.createMany.data.map((item) => (
          <div key={item.value} className="flex items-center gap-x-3">
            <div className="text-gray-500">{item.name} :</div>
            <div className="text-gray-900 font-semibold">{item.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
}

export default Info;
