import { UserContext } from "@/09-useContext/context/UserContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type React from "react"
import { useContext, useState } from "react"
import { Link, useNavigate, useNavigation } from "react-router"
import { toast } from "sonner"

export const LoginPage = () => {

  const {login} = useContext(UserContext);

  const [userId, setuserId] = useState('');

  const navigation = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    console.log({userId});
    const result = login(+userId);
    console.log({result});
    if(!result){
      toast.error('Usuario no encontrado');
      return;
    }
    navigation('/profile')

  }
  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold"> Iniciar Sesión</h1>
      <hr />
      <form action="" className="flex flex-col items-center" onSubmit={handleSubmit}>
        <Input type="number" placeholder="ID usuario" value={userId} onChange={event =>setuserId(event.target.value)}/>
        <Button
        type = "submit"
        >Login</Button>
      </form>
      <Link to='/about' className="text-white">
        <Button variant='ghost'>Volver a la página principal</Button>
      </Link>
      
    </div>
  )
}
