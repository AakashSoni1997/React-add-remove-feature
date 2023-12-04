import React from "react";
import { Switch, Route } from "react-router-dom";
import NewMeetUp from "./compoent/NewMeetUp";
import FavoritesPage from "./compoent/FavoritesPage";
import AllMeet from "./compoent/AllMeet";
import Layout from "./layout/Layout";

const Index = () => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeet />
          </Route>
          <Route path="/newmeetup">
            <NewMeetUp />
          </Route>
          <Route path="/favoritespage">
            <FavoritesPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
};

export default Index;
