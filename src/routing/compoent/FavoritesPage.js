import React, { useContext } from "react";
import favoutritesContext from "../store/StoreConext";
import MeetUpList from "../meetup/MeetUpList";

const FavoritesPage = () => {
  const favoritesCtx = useContext(favoutritesContext);
  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorite yet. starting adding some?</p>;
  } else {
    content = <MeetUpList meetups={favoritesCtx.favorites} />;
  }
  return (
    <section>
      <h2> My Favorite</h2>
      {content}
    </section>
  );
};

export default FavoritesPage;
