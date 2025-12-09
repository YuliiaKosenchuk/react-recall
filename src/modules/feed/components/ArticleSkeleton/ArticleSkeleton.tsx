import Container from "../../../../components/Container/Container";
import { Skeleton } from "@mui/material";

const ArticleSkeleton = () => {
  return (
    <Container>
      <article>
        <div className="pt-2 border-t border-black/10 pb-8">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-5">
              <Skeleton variant="circular" width={40} height={40} />
              <div>
                <Skeleton variant="text" width={100} height={20} />
                <Skeleton variant="text" width={60} height={14} />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Skeleton variant="circular" width={24} height={24} />
              <Skeleton variant="text" width={30} height={20} />
            </div>
          </div>
          <Skeleton variant="text" width="70%" height={30} />
          <Skeleton variant="text" width="100%" height={20} />
          <Skeleton variant="text" width="90%" height={20} />
          <Skeleton variant="text" width="80%" height={20} />
          <div className="flex justify-between items-center mt-4">
            <Skeleton variant="text" width={100} height={20} />

            <div className="flex gap-2">
              <Skeleton variant="rounded" width={60} height={24} />
              <Skeleton variant="rounded" width={60} height={24} />
              <Skeleton variant="rounded" width={60} height={24} />
            </div>
          </div>

        </div>
      </article>
    </Container>
  );
};

export default ArticleSkeleton;
