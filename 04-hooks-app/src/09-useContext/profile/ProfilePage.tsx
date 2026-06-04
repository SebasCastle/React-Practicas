import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import { UserContext } from "../context/UserContext"
import { useContext } from "react"


export const ProfilePage = () => {

  const {user, logout} = useContext(UserContext);
  const name = user?.name;
  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
        <h1 className="text-4xl text-white">Perfil de usuario</h1>
        <hr />
        <pre>
            {JSON.stringify(name, null, 2)}

        </pre>
        <Link to='/about'>
            <Button variant='destructive' onClick={logout} > Salir </Button>
        </Link>
    </div>
  )
}

