
//API 
import apiSettings from "../API";
import { useEffect, useState } from "react";
const initialState ={
    topic:[]
 }
export const GetTopicById=(TopicId)=>{
    const [topic, setTopic] = useState(initialState);
    const [loadingTopic, setLoadingTopic] = useState(false);
    const [errorTopic, setErrorTopic] = useState(false);
    const fetchTopic = async()=>{
        try{
            setErrorTopic(false);
            setLoadingTopic(true);
            
            const topicFetch = await apiSettings.fetchTopicById(TopicId);
            
            console.log(topicFetch);
            setTopic(() => ({
                topic: topicFetch
            }));
        }
        catch(error){
            setErrorTopic(true);
        }
        setLoadingTopic(false);
    }
    useEffect(()=>{    
        setTopic(initialState);
        fetchTopic();
    },[])
    return {topic, loadingTopic, errorTopic} ;
}