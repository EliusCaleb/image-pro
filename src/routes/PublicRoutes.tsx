import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { FC } from "react";

interface PublicRoutesProps{
    children: React.ReactElement
}

const PublicRoutes:FC<PublicRoutesProps> = ({children}) => {
    const{user} = useAuth()
    //const user = 'John Doe'
    if(user){
        return <Navigate to='/' replace={true}/>
    }

    return children
  
}

export default PublicRoutes