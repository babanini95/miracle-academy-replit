import { RouteObject } from "react-router-dom";
import Home from "@/pages/Home";
import Akademi from "@/pages/Akademi/Akademi";
import ClassCategory from "@/pages/Akademi/ClassCategory";
import ClassDetails from "@/pages/Akademi/ClassDetails";
import NotFound from "@/pages/not-found";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/akademi",
    element: <Akademi />,
  },
  {
    path: "/kategori",
    element: <ClassCategory />,
  },
  {
    path: "/detail",
    element: <ClassDetails />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
