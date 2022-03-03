
//API 
import apiSettings from "../API";
import { useEffect, useState } from "react";
const initialState ={
    topics:[],
    status:"ok"
 }
export const useTopicFetch=()=>{
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const fetchTopics = async()=>{
        try{
            setError(false);
            setLoading(true);
            const topics = await apiSettings.fetchTopics();
           // console.log(topics);
            setState(() => ({
                topics: topics,
            }));
        }
        catch(error){
            setError(true);
        }
        setLoading(false);
    }
    useEffect(()=>{
        setState(initialState);
        fetchTopics();
    },[])
    return {state, loading, error} ;
}