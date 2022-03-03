
//API 
import apiSettings from "../API";
import { useEffect, useState } from "react";
const initialState ={
    subtopics:[],
 }
export const useSubTopicFetchByTopic=(status)=>{
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(false);
    const [errorFetchSubtopic, setErrorFetchSubtopic] = useState(false);
    const fetchsubTopics = async()=>{
        try{
            setErrorFetchSubtopic(false);
            setLoading(true);
            const subtopics = await apiSettings.fetchSubtopicByStatus(status);
            console.log(subtopics);
            setState(() => ({
                subtopics,
            }));
        }
        catch(error){
            setErrorFetchSubtopic(true);
        }
        setLoading(false);
    }
    useEffect(()=>{
        setState(initialState);
        fetchsubTopics();
    },[])
    return {state, loading, errorFetchSubtopic} ;
}