import { RouterProvider } from "react-router"
import { AppRouter } from "./Router/AppRouter"
import { UserContextProvider } from "./context/UserContext"

export const ProfessionalApp = () => {
  return (
    <UserContextProvider>
      <div className=" bg-gradient flex flex-col items-center">
          <RouterProvider router={AppRouter}/>
      </div>
    </UserContextProvider>
  )
}

