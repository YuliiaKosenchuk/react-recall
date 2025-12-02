import type { FC } from "react";
import Container from "../../../../components/Container/Container";
import { Link } from "react-router-dom";

interface ArticleProps {}

const Article: FC<ArticleProps> = () => {
  return (
    <Container>
      <article>
        <div className="border-t border-black/10">
          <div className="mb-4 flex items-center gap-5">
            <Link to="/@nokwin">
              <img
                src="#"
                className="inline-block h-8 w-8 rounded-full"
                alt="nokwin avatar"
              />
            </Link>
            <div className="mr-6">
              <Link
                to="/@nokwin"
                className="font-(family-name:--font-basic) text-sm text-[var(--color-primary)] flex gap-0"
              >
                Nokwin
              </Link>
              <span className="text-xs text-black/50">Jan 1st</span>
            </div>
          </div>
        </div>
      </article>
    </Container>
  );
};

export default Article;
