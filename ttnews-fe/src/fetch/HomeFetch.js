// import React from "react";
//API 
import apiSettings from "../API";
import { useEffect, useState } from "react";
const initialState ={
   Newest:[],
   Hottest:[]
}
export const useHomeFetch=()=>{
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const fetchNews = async()=>{
        try{
            setError(false);
            setLoading(true);
            
            const New = await apiSettings.fetchNewstNews();
            console.log(New);
            const Hot = await apiSettings.fetchHottest();
            console.log(Hot);
            setState({
                Newest: New,
                Hottest: Hot
            });
        }
        catch(error){
            setError(true);
        }
        setLoading(false);
    }
    useEffect(()=>{
        setState(initialState);
        fetchNews();
    },[])
    return {state, loading, error} ;
}