import { TOP_HEADLINES_URL } from "./config";
// import url from "../../TTNewsBE/TTNewsBE/wwwroot/Images"
//test fake api

const apiSettings = {
    
    fetchPopularNews : async() =>{
        //const endpoint = "https://localhost:44387/api/News";
        const endpoint = TOP_HEADLINES_URL;
        return await ( await fetch(endpoint)).json();
    },
    fetchNewstNews : async() =>{
        const endpoint = "https://localhost:44387/api/News/Newest";
        return await(await fetch(endpoint)).json();
    },
    fetchNewsById : async NewsId=>{
        const endpoint= `https://localhost:44387/api/News/GetById/${NewsId}`;
        return await(await fetch(endpoint)).json();
    },
    fetchAllUsers : async ()=>{
        const endpoint=`https://localhost:44387/api/Newsusers`;
        return await(await fetch(endpoint)).json();
    },
    fetchUserById : async Userid=>{
        const endpoint=`https://localhost:44387/api/Newsusers/${Userid}`;
        return await(await fetch(endpoint)).json();
    },
    fetchUserByRole : async role=>{
        const endpoint=`https://localhost:44387/api/Newsusers/role/${role}`;
        return await(await fetch(endpoint)).json();
    },
    fetchTopics : async()=>{
        const endpoint = 'https://localhost:44387/api/Topics';
        return await ( await fetch(endpoint)).json();
    },
    fetchTopicById : async(TopicId)=>{
        const endpoint = `https://localhost:44387/api/Topics/${TopicId}`;
        return await ( await fetch(endpoint)).json();
    },
    fetchSubTopicsByTopic : async(idtopic)=>{
        const endpoint =`https://localhost:44387/api/Subtopics/Topic/${idtopic}`;
        return await (await fetch(endpoint)).json();
    },
    fetchSubTopicsById : async(SubtopicId)=>{
        const endpoint =`https://localhost:44387/api/Subtopics/GetById/${SubtopicId}`;
        return await (await fetch(endpoint)).json();
    },
    fetchSubtopicByStatus :async(status)=>{
        const endpoint = `https://localhost:44387/api/Subtopics/GetByStatus/${status}`;
        return await ( await fetch(endpoint)).json();
    },

    fetchNewsByStatus :async(status)=>{
        const endpoint = `https://localhost:44387/api/News/GetByStatus/${status}`;
        return await ( await fetch(endpoint)).json();
    },
    fetchNewsPaginationApprovedByTopic :async(topicid,page, pageSize)=>{
        const endpoint = `https://localhost:44387/api/News/GetByTopic/${topicid}/Status/approved/page/${page}/pageSize/${pageSize}`;
        return await ( await fetch(endpoint)).json();
    },
    fetchNewsPaginationApprovedBySubtopic :async(Subtopicid,page,pageSize)=>{
        const endpoint = `https://localhost:44387/api/News/GetBySubTopic/${Subtopicid}/Status/approved/page/${page}/pageSize/${pageSize}`;
        return await ( await fetch(endpoint)).json();
    },
    fetchNewsApprovedByTopic :async(topicid)=>{
        const endpoint = `https://localhost:44387/api/News/GetByTopic/${topicid}/Status/approved`;
        return await ( await fetch(endpoint)).json();
    },
    fetchNewsApprovedBySubtopic :async(Subtopicid)=>{
        const endpoint = `https://localhost:44387/api/News/GetBySubTopic/${Subtopicid}/Status/approved`;
        return await ( await fetch(endpoint)).json();
    },
    // views
    fetchViewByIdNews : async(Newsid) => {
        const endpoint = `https://localhost:44387/api/Views/News/${Newsid}`;
        return await (await fetch(endpoint)).json();
    },
    fetchViewByIdViews : async(Viewsid) => {
        const endpoint = `https://localhost:44387/api/Views/${Viewsid}`;
        return await (await fetch(endpoint)).json();
    },
    fetchHottest : async() =>{
        const endpoint = `https://localhost:44387/api/Views/Hottest`;
        return await (await fetch(endpoint)).json();
    },
    fetchNewsApprovedByAuthor :async(authorid)=>{
        const endpoint = `https://localhost:44387/api/News/GetByStatus/approved/author/${authorid}`;
        return await ( await fetch(endpoint)).json();
    },
    fetchNewsDeclinedByAuthor :async(authorid)=>{
        const endpoint = `https://localhost:44387/api/News/GetByStatus/declined/author/${authorid}`;
        return await ( await fetch(endpoint)).json();
    },
   

    
};
export default apiSettings;