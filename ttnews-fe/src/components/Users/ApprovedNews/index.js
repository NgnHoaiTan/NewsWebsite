import { Wrapper,Content, News, Image, ContentNews } from "./ApprovedNews.styles";
import { Header } from "../../Header";
import { useEffect, useState } from "react";
import apiSettings from "../../../API";
import { Link, Redirect } from "react-router-dom";
export const ApprovedNews = () =>{
    const [news, setNews] = useState();
    const [error, setError] = useState(false);
    let iduser;
    iduser = localStorage.getItem('iduser');
    const fetchNewsApprovedByAuthor = async() =>{
        try{
            setError(false);
            const newsfetch = await apiSettings.fetchNewsApprovedByAuthor(iduser)
            setNews({
                ...newsfetch
            })
        }
        catch{
            setError(true);
        }
    }
    useEffect(()=>{
        setNews();
        fetchNewsApprovedByAuthor();
    },[]) 
    if(iduser==null){
        return (
            <Redirect to="/"/>
        )
    }
    console.log(news);
    return(
        <>
            <Header user={iduser} />
            <Wrapper>
                <Content>
                    <h2>Các bài viết đã được duyệt của bạn</h2>
                    {news!=null && news.articles.map((newsitem)=>{
                        return(
                            <News key={newsitem.id}>
                                <div className="wrapper-img">
                                    {<Image src={newsitem.imageName} alt="temp"/> }
                                </div>
                                <ContentNews>
                                    
                                    <p className="title">{newsitem.title}</p>
                                    <Link to={`/News/${newsitem.id}`}>
                                        <span className="readmore"> xem thêm...</span>
                                    </Link>
                                    {newsitem.topic!=null&&<p>Nhóm chủ đề: {newsitem.topic.topicname}</p>}
                                    {newsitem.subtopic!=null&&<p>Chủ đề: {newsitem.subtopic.subtopicname}</p>}
                                </ContentNews>
                                
                            </News>
                        )
                    })}
                </Content>
            </Wrapper>
        </>
    )
}