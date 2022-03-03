import React, { useEffect, useState } from "react";
import { Wrapper, Content, Image } from "./News.styles";
import { Link } from "react-router-dom";
import NoImg from '../../image/noImage.jpg'
import apiSettings from "../../API";

export const NewsThumb =({newsid,clickable})=>{

    const [news, setNews] = useState();
    const [error, setError] = useState(false);
    const fetchNews =async()=>{
        try{
            setError(false);
            const NewsFetch = await apiSettings.fetchNewsById(newsid);  
                    
            setNews({
                ...NewsFetch
            })
        }catch{
            setError(true);
        }
    }
    useEffect(()=>{
        fetchNews();
    },[newsid])


    const topic = news!=null ? news.topic : "";
    const author = news!=null ? news.author: "";
    const subtopic = news!=null ? news.subtopic: "";
    
    
    return(
        
        <Wrapper>
            
            <div className="wrapper-img">
                {news!=null && news.imageName!=null && <Image src={news.imageName} alt="temp"/> }
                {news==null || news.imageName==null && <Image src={NoImg} alt="temp"/> }
            </div>
            
            {news!=null &&
            <Content>
                {clickable ?<Link to={`/News/${news.id}`}>
                <p className="title">{news.title}<br/><span className="readmore"> xem thêm...</span></p>
                </Link>
                :
                <p className="title">{news.title}</p>
                }   
                <p>Thời gian: {news.time_update_news}</p>
                {author!=null&&<p>Tác giả: {author.fullname}</p>}
                {topic!=null&&<p>Nhóm chủ đề: {topic.topicname}</p>}
                {subtopic!=null&&<p>Chủ đề: {subtopic.subtopicname}</p>}
            </Content> 
            }
        
        </Wrapper>
        
    )
    
}