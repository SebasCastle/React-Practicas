import { createBrowserRouter, Navigate } from "react-router";
import { AboutPage } from "../pages/about/AboutPage";
import { LoginPage } from "../pages/auth/login/LoginPage";
import { ProfilePage } from "../profile/ProfilePage";
import { PrivateRoute } from "./PrivateRoute";
// import { RouterProvider } from "react-router/dom";

export const AppRouter = createBrowserRouter([
  {
    path: "/about",
    element: <AboutPage/>,
  },
  {
    path: "/profile",
    // element: <ProfilePage/>,
    element:<PrivateRoute element={<ProfilePage/>}/>
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
   {
    path: "*",
    element: <Navigate to='/about'/>,
  },

  
]);