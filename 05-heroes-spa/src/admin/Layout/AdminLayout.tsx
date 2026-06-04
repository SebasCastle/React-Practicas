import { Outlet } from "react-router"

export const AdminLayout = () => {
  return (
    <div className="bg-gradient bg-blue-400 font-bold">
        <Outlet/>
    </div>
  )
}

