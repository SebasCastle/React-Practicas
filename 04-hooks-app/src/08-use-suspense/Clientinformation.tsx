import { use, type Usable } from "react"
import { type User } from "./api/get-user.action"


interface Props  {
    getUser: Usable<User>;
}

// const usePromise = getUsrAcction(1);

export const Clientinformation = ({getUser}: Props) => {

    const invocarApi = use(getUser);


    // useEffect(()=>{
    //     getUsrAcction(id)
    //     .then(user => console.log)
    // },[id])

  return (
    <div className="bg-gradient flex flex-col gap-4 items-center">
        <h2 className="text-4xl font-thin text-white"> {invocarApi.name} -# {invocarApi.id} </h2>
        <p className="text-white text-2xl"> {invocarApi.location} </p>
        <p className="text-white text-xl"> {invocarApi.role} </p>
      
    </div>
  )
}