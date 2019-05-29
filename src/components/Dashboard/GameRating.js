import React from "react";
import { Rating } from "semantic-ui-react";

const GameRating = props => {
  // eslint-disable-next-line react/prop-types
  const { id } = props;

  return (
    <Rating
      style={{ marginRight: "0.75rem" }}
      size="huge"
      icon="heart"
      onClick={() => {
        if (!localStorage.getItem(id)) localStorage.setItem(id, true);
        else localStorage.removeItem(id);
        window.location.reload(); 
      }}
      rating={!!localStorage.getItem(id)}
      maxRating={1}
    />
  );
};

export default GameRating;