"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import Currency  from "@/components/ui/currency";
import IconButton  from "@/components/ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { Post, Product } from "@/types";
import { format, parseISO, toDate } from "date-fns";

interface PostCard {
  data: Post
}

const PostCard: React.FC<PostCard> = ({
  data
}) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/blog/${data?.id}`);
  };
  
  return ( 
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      {/* Image & actions */}
      <div className="aspect-square overflow-hidden rounded-xl duration-700 bg-gray-100 relative">
        <Image 
          src={data.image?.[0]?.url} 
          alt="" 
          fill
          className="aspect-square group-hover:scale-110 duration-500 transition-all object-cover rounded-md"
        />
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.title}</p>
      </div>
      {/* Price & Reiew */}
      <div className="flex items-center justify-between">
        <time className="text-gray-500">{format(parseISO(data.createdAt!), 'MMMM do, yyyy, h:mm')}</time>
      </div>
    </div>
  );
}

export default PostCard;
