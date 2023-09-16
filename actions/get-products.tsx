import { Product } from "@/types";
import qs from "query-string";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  customField?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query, storeId:string): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: `https://app.supercontent.dev/api/${storeId}/products`,
    query: { 
      customField: query.customField,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getProducts;
