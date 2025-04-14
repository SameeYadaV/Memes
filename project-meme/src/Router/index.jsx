import { createBrowserRouter } from "react-router";
import App from "../App";
import ExplorePage from "../component/ExplorePage";
import CreatePage from "../component/CreatePage";
import React from "react";
import LeaderBoard from "../component/LeaderBoard";
import UserProfie from "../component/UserProfie";
import Index from "../component";
import DetailsPage from "../component/DetailsPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/main",
    element: <Index />,
  },
  {
    path: "/upload",
    element: <CreatePage />,
  },
  {
    path: "/leaderboard",
    element: <LeaderBoard />,
  },
  {
    path: "/profile",
    element: <UserProfie />,
  },
  {
    path: "/home",
    element: <Index />,
  },
  {
    path: "/explore",
    element: <ExplorePage />,
  },
]);
