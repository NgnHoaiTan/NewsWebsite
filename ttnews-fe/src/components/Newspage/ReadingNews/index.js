import apiSettings from "../../../API";
import { Container, Content } from "./ReadingNews.styles";
import { Header } from "../../Header";
import { useState,useEffect } from "react";

const initialState ={
    news:[],
 }
export const ReadingNews =({Newsid,view})=>{
    const [error, setError] = useState(false);
    const [News, setNews] = useState(initialState);
    const [author, setAuthor] = useState({});
    const [topic,setTopic] = useState({});
    const [subtopic,setSubtopic] = useState({});
    let iduser;
    console.log(view);
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
            setNews(() => ({
                news,
            }));
        }
        catch(error){
            setError(true);
        }
    };
    useEffect(()=>{
        setNews(initialState);
        fetchNews();
    },[]);
    
    iduser = localStorage.getItem('iduser');
    return(
        <>
            <Header user={iduser} /> 
            <Container>
                <Content>
                        <div className="topic">
                            <h4 className="topicname">Chủ đề: {topic.topicname}<span> <i className="fas fa-chevron-right icon"></i></span> <span>{subtopic.subtopicname}</span></h4>
                        </div>
                        <div className="title-news">
                            <p>{News.news.title}</p>    
                        </div>
                        <div className="info-author">
                            <p className="name-author">Được viết bởi: {author.fullname}</p>
                            <i>Thời gian viết tin: {News.news.time_update_news}</i>
                            <br />
                            {view!=null && <i>Lượt xem: {view.totalView}</i>}
                            {view==null && <i>Lượt xem:</i>}
                        </div>
                        
                        <div className="description-news">
                            <p>{News.news.descriptions}</p>
                        </div>
                        <div className="img-news">
                           <img src={News.news.imageName} /> 
                        </div>
                        <div className="content">
                            <p dangerouslySetInnerHTML={{__html:News.news.content}}></p>
                            
                        </div>
                </Content>
            </Container>
        </>
    )
    
    
}