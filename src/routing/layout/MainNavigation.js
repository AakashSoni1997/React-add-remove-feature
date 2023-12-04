import React, { useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./MainNavigation.module.css";
import favoutritesContext from "../store/StoreConext";
const MainNavigation = () => {
  const favoritesCtx = useContext(favoutritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meet Up</div>
      <ul>
        <li>
          <Link to="/">All Meet up</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/newmeetup">New Meet Up</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link to="/favoritespage">
            Favorite page
            <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
