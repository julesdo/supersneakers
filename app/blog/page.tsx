import getBillboards from "@/actions/get-billboards";
import getPosts from "@/actions/get-posts";
import getProducts from "@/actions/get-products";
import PostList from "@/components/post-list";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";

import Container from "@/components/ui/container";
import { storeId } from "@/lib/utils";

export const revalidate = 0;

const BlogPage = async () => {
  const posts = await getPosts(storeId);
  const billboards = await getBillboards(storeId);
  const blogBillboard = billboards.filter((billboard) => billboard.label === 'blog')[0];

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard 
          data={blogBillboard}
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <PostList title="Our news" items={posts} />
        </div>
      </div>
    </Container>
  )
};

export default BlogPage;
