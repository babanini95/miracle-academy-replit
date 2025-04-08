import { RouteObject, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import Akademi from "@/pages/Akademi/Akademi";
import ClassCategory from "@/pages/Akademi/ClassCategory";
import ClassDetails from "@/pages/Akademi/ClassDetails";
import NotFound from "@/pages/not-found";
import SignIn from "@/pages/Authentication/SignIn";
import EditableLanding from "@/pages/AkademiLanding";
import SignupCard from "@/pages/Authentication/SignUp";

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
    path: "/editable-landing",
    element: <EditableLanding />,
  },
  {
    path: "/auth",
    children: [
      {
        path: "",
        element: <Navigate to="/auth/signin" replace />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignupCard />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

// export const authRoutes: RouteObject[] = [
//   {
//     path: "/auth",
//     children: [
//       {
//         path: "",
//         element: <Navigate to="/auth/signin" replace />,
//       },
//       {
//         path: "signin",
//         element: <SignIn />,
//       },
//       {
//         path: "signup",
//         element: <SignupCard />,
//       },
//     ],
//   },
// ];
