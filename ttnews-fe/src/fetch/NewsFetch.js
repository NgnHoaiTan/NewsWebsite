
import { useState, useEffect } from "react";
import apiSettings from "../API";

export const useNewsFetch=(NewsId) =>{
    const [state, setState] = useState([]);
    const [loading, setLoading]= useState(true);
    const [error, setError] = useState(false);
    console.log(NewsId);
    const fetchData = async()=>{
        try{
            setLoading(true);
            setError(false);
            const News = await apiSettings.fetchNewsById(NewsId);
            //console.log(News)
            setState({
                News:News,

            })
            }
        catch(error){
            setError(true);
            }
        }
    useEffect( ()=>{
        fetchData();
        
    },[]);
    return {state, loading, error};

}