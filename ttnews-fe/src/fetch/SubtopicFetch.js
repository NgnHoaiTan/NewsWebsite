
//API 
import apiSettings from "../API";
import { useEffect, useState } from "react";
const initialState ={
    subtopics:[],
    status:"ok"
 }
export const useSubTopicFetchByTopic=(idtopic)=>{
    const [subtopics, setSubTopics] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [errorFetchSubtopic, setErrorFetchSubtopic] = useState(false);
    const fetchsubTopics = async()=>{
        try{
            setErrorFetchSubtopic(false);
            setLoading(true);
            const subtopics = await apiSettings.fetchSubTopicsByTopic(idtopic);
            console.log(subtopics);
            setSubTopics(() => ({
                subtopics: subtopics,
            }));
        }
        catch(error){
            setErrorFetchSubtopic(true);
        }
        setLoading(false);
    }
    useEffect(()=>{
        setSubTopics(initialState);
        fetchsubTopics();
    },[])
    return {subtopics, loading, errorFetchSubtopic} ;
}