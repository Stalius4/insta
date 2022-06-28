
import {Navigate} from "react-router-dom";
export const ProtectedRoute = ({children, jwt}) => {

    if(!jwt){
        return <Navigate to ="/" />
    }
return <Navigate to ="/main" />

 

}