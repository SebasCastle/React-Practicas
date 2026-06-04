import { use, type JSX } from "react"
import { UserContext } from "../context/UserContext"
import { Navigate } from "react-router";

interface props {
    element: JSX.Element,

}

export const PrivateRoute = ({element}:props) => {

    const {authStatus} = use(UserContext);

    if (authStatus ==='checking'){
        return null;
    }
    if(authStatus === 'authenticated'){
        return element;
    }
    return <Navigate to='/login' replace/>
}

