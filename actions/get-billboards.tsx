import { Billboard } from "@/types";


const getBillboards = async (storeId : string): Promise<Billboard[]> => {
  const res = await fetch(`https://app.supercontent.dev/api/${storeId}/billboards`);

  return res.json();
};

export default getBillboards;
