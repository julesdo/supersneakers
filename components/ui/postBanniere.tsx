import { Billboard, Post } from "@/types";

interface PostProps {
  data: Post;
}

const PostBanniere: React.FC<PostProps> = ({
  data
}) => {
  console
  return ( 
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div style={{ backgroundImage: `url(${data?.image[0].url})` }} className="rounded-xl brightness-75 relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-white text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data?.title}
          </div>
        </div>
      </div>
    </div>
   );
};

export default PostBanniere;
