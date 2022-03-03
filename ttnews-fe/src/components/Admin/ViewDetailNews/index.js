import apiSettings from "../../../API";
import { Container,Wrapper,Content } from "./Detail.styles";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
// import dotenv from  'dotenv';

const initialState ={
    news:[],
 }
export const DetailNews =()=>{

    const [redirect,setRedirect] = useState(false);
    const [state,setState] = useState(initialState);
    const [error,setError] = useState(false);
    const [author,setAuthor] = useState({});
    const [topic,setTopic] = useState({});
    const [subtopic,setSubtopic] = useState({});
    const {Newsid} = useParams();

    const fetchNews = async()=>{
        try{
            setError(false);          
            const news = await apiSettings.fetchNewsById(Newsid);
            console.log(news);
            const authorfetch = news.author;
            const topicfetch = news.topic;
            const subtopicfetch = news.subtopic;
            
            setAuthor(()=>({
                ...authorfetch,
            }));
            setTopic(()=>({
                ...topicfetch,
            }));
            setSubtopic(()=>({
                ...subtopicfetch,
            }));
            setState(() => ({
                news,
            }));
        }
        catch(error){
            setError(true);
        }
    };
    useEffect(()=>{
        setState(initialState);
        fetchNews();
    },[]);

    const Approve =async(e)=>{
        console.log(e.target.value);
        if(state.news!=null){
            const itemnews = state.news;
            if(itemnews.id===e.target.value){
                const id = itemnews.id;
                const title = itemnews.title;
                const descriptions = itemnews.descriptions;
                const content = itemnews.content;
                const status = "approved";
                const topic = itemnews.topic!=null ?{
                    id:itemnews.topic.id,
                    topicname:itemnews.topic.topicname
                } : null;
                const time_update_news = itemnews.time_update_news;
                const imageName = itemnews.imageName;
                const subtopic = itemnews.subtopic;
                const author = itemnews.author;
                const dataPost ={id,title, descriptions, content,time_update_news,imageName, topic,subtopic,author, status};
                var datajson = JSON.stringify(dataPost);
                console.log(datajson);
                await fetch(`https://localhost:44387/api/News/${id}`,{
                    method:'PUT',
                    headers:{
                        'Content-Type':'application/json',
                        'accept': '*/*'  
                    },
                    body:datajson
                    }
                    ).then(
                        setRedirect(true)
                    )
                    
                    .catch(err => console.log(err))
            }
                  
        }
    }  
    const Decline=async(e)=>{
        if(state.news!=null){
            const itemnews = state.news;
             if(itemnews.id===e.target.value){
                 const id = itemnews.id;
                 const title = itemnews.title;
                 const descriptions = itemnews.descriptions;
                 const content = itemnews.content;
                 const status = "declined";
                 const topic = itemnews.topic!=null ?{
                     id:itemnews.topic.id,
                     topicname:itemnews.topic.topicname
                 } : null;
                 const time_update_news = itemnews.time_update_news;
                 const imageName = itemnews.imageName;
                 const subtopic = itemnews.subtopic;
                 const author = itemnews.author;
                 const dataPost ={id,title, descriptions, content,time_update_news,imageName, topic,subtopic,author, status};
                 var datajson = JSON.stringify(dataPost);
                 console.log(datajson);
                 await fetch(`https://localhost:44387/api/News/${id}`,{
                     method:'PUT',
                     headers:{
                         'Content-Type':'application/json',
                         'accept': '*/*'  
                     },
                     body:datajson
                     }
                     ).then(
                         setRedirect(true)
                     )
                     
                     .catch(err => console.log(err))
             }
             
         }
     
    }
    if(redirect){
        return <Redirect  to="/admin"/>
    }


    if(error){
        return(
            <>
            <Container> 
                <Wrapper>
                    <Content>
                        <p>Something wrong happened</p>
                    </Content>   
                </Wrapper>
                     
            </Container>
            </>
        )
    }
    else if(state.news!=null)
    return(
        <>
        <Container> 
            <Wrapper>
                <Content>
                    <div className="topic">
                        <h4 className="topicname">Chủ đề: {topic.topicname}<span> <i className="fas fa-chevron-right icon"></i></span> <span>{subtopic.subtopicname}</span></h4>
                    </div>
                    <div className="title-news">
                        <p>{state.news.title}</p>    
                    </div>
                    <div className="info-author">
                        <p className="name-author">Được viết bởi: {author.fullname}</p>
                        <i>ID tác giả: {author.id}</i>
                    </div>
                    
                    <div className="description-news">
                        <p>{state.news.descriptions}</p>
                    </div>
                    <div className="img-news">
                        
                       <img src={state.news.imageName}/> 
                    </div>
                    <div className="content">
                        <p dangerouslySetInnerHTML={{__html:state.news.content}}></p>
                        
                    </div>
                    
                    <div className="footer-approve">
                        <button className="no"value={state.news.id} onClick={Decline}><i className="fas fa-times icon"></i>Hủy</button>
                        <button className="yes"value={state.news.id} onClick={Approve}><i className="fas fa-check icon"></i>Duyệt</button>    
                    </div>
                </Content>   
            </Wrapper>
                 
        </Container>
        </>
    )
}