import type { FC } from "react";
import Container from "../Container/Container";

interface BannerProps {}

const Banner: FC<BannerProps> = () => {
  return (
    <main>
      <div className="banner mb-5 bg-[var(--color-primary)] p-2 inset-shadow-xs inset-shadow-gray-200">
        <Container>
          <div className="container m-auto text-white text-center">
            <h1 className="font-(family-name:--font-accent) text-7xl leading-[1.1] pb-2">
              conduit
            </h1>
            <p className="text-2xl">A place to share your knowledge.</p>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default Banner;
