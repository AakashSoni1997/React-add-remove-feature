import React, { useContext } from "react";
import classes from "./MeetUpItem.module.css";
import favoutritesContext from "../store/StoreConext";
const MeetUpItem = (props) => {
  const favoritesCtx = useContext(favoutritesContext);
  const itemIsFavorite = favoritesCtx.itemFavorite(props.id);
  const handleFavorite = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      });
    }
  };

  return (
    <li>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3> {props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={handleFavorite}>
          {itemIsFavorite ? "Remove to Favorites" : "To Favorites"}
        </button>
      </div>
    </li>
  );
};

export default MeetUpItem;
