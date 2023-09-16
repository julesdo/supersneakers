import { Billboard } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string, storeId : string): Promise<Billboard> => {
  const res = await fetch(`https://app.supercontent.dev/api/${storeId}/billboards/${id}`);

  return res.json();
};

export default getBillboard;
