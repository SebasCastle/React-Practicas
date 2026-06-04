import { RouterProvider } from "react-router"
import { appRouter } from "./router/AppRouters"

export const HeroesApp = () => {
  return <> <RouterProvider router={appRouter}/>
  </>
}

