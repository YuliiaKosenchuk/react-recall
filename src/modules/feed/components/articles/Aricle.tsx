import type { FC } from "react";
import FavoriteButton from "../../../../components/FavoriteButton/FavoriteButton";
import Container from "../../../../components/Container/Container";
import { Link } from "react-router-dom";
import TagList from "../TagList/TagList";

interface ArticleProps {
  post: {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: {
      likes: number;
      dislikes: number;
    };
    views: number;
  };
}

const Article: FC<ArticleProps> = ({ post }) => {
  return (
    <Container>
      <article>
        <div className="pt-2 border-t border-black/10 pb-8">
          <div className="flex justify-between">
            <div className="pb-2 flex items-center gap-5">
              <Link to={`/user/${post.id}`}>
                <img
                  src="https://i.pinimg.com/736x/64/79/8f/64798f91c135882ab03ba79c358289fd.jpg"
                  className="inline-block h-10 w-10 rounded-full object-cover"
                  alt="nokwin avatar"
                />
              </Link>
              <div className="mr-6">
                <Link
                  to="/@nokwin"
                  className="font-(family-name:--font-basic) text-sm text-(--color-primary) flex gap-0 hover:text-black"
                >
                  Jung Kook
                </Link>
                <span className="text-xs text-black/50">Jan 1st</span>
              </div>
            </div>
            <FavoriteButton likes={post.reactions.likes} />
          </div>
          <Link
            to={`/article/${post.id}`}
            className="block py-4px no-underline"
          >
            <h1 className="mb-4px font-semibold text-2xl text-gray-700 hover:text-black">
              {post.title}
            </h1>
            <p className="text-gray-500 hover:text-black mb-1">{post.body}</p>
          </Link>
          <div className="flex items-center justify-between">
            <span className="text-gray-300"> Reed more...</span>
            <TagList />
          </div>
        </div>
      </article>
    </Container>
  );
};

export default Article;
