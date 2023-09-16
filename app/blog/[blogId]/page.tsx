import getBillboards from "@/actions/get-billboards";
import getPost from "@/actions/get-post";
import Container from "@/components/ui/container";
import PostBanniere from "@/components/ui/postBanniere";
import { storeId } from "@/lib/utils";

export const revalidate = 0;

const BlogPage = async ({ params } : { params: { blogId: string }}) => {
  const post = await getPost(params.blogId, storeId);
  const billboards = await getBillboards(storeId);
  const blogBillboard = billboards.filter((billboard) => billboard.label === 'blog')[0];

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <PostBanniere 
          data={post}
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <div className="prose max-w-none md:px-14 px-4" dangerouslySetInnerHTML={{__html:post.content}}/>
        </div>
      </div>
    </Container>
  )
};

export default BlogPage;
