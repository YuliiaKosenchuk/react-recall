import type { FC } from "react";
import { useState } from "react";
import { FavoriteBorder, Favorite } from "@mui/icons-material";

interface FavoriteButtonProps {
  likes: number;
}

const FavoriteButton: FC<FavoriteButtonProps> = ({ likes }) => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className="flex hover:opacity-80 transition items-center"
    >
      {liked ? (
        <Favorite className="text-(--color-primary) " />
      ) : (
        <FavoriteBorder className="text-(--color-primary)" />
      )}
      <span className="ml-1 min-w-[4ch] text-right">{likes}</span>
    </button>
  );
};

export default FavoriteButton;
