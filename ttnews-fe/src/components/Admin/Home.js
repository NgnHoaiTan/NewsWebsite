import { NavSidebar } from "./NavSidebar"
import { Container } from "./HomeStyles"
import { ContentMain } from "./ContentMain"
import { useState,useEffect } from "react"
import { Redirect } from "react-router-dom";
import { useUserFetch } from "../../fetch/UserFetch";
import apiSettings from "../../API";

export const HomeAdmin=()=>{
    const [option, setOption] = useState();   
    const idadmin = localStorage.getItem('iduser');
    const role = localStorage.getItem('role');
    const [admin, setAdmin] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const fetchAdmin = async()=>{
        try{
            setError(false);
            setLoading(true);
            
            const Admin = await apiSettings.fetchUserById(idadmin);
            
            setAdmin(() => ({
                ...Admin
            }));
            
        }
        catch(error){
            setError(true);
            
        }
        setLoading(false);
    }
    useEffect(()=>{
        setAdmin('');
        fetchAdmin();
    },[])
    if(role =="user" || idadmin==null){
        
        return(
            <Redirect to='/' />
        )
        
    }
    
    if(error){
        return(
            <>
                <h2>
                    Error
                </h2>
            </>
        )
    }
    else{
        return(
                     <>
                    
                     <Container>
                        
                         <NavSidebar setOption={setOption}/>
                         <ContentMain
                             option = {option}
                         />    
                     </Container>
                       
                     </>
            )
    }
    
 
   
    
}