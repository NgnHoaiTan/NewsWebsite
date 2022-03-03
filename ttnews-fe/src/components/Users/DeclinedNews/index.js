import { Wrapper,Content, News, Image, ContentNews } from "./DeclinedNews.styles";
import { Header } from "../../Header";
import { useEffect, useState } from "react";
import apiSettings from "../../../API";
import { Link, Redirect } from "react-router-dom";
import noImg from "../../../image/noImage.jpg";
export const DeclinedNews = () =>{
    const [news, setNews] = useState();
    const [error, setError] = useState(false);
    const [triggerDel, setTriggerDel] = useState(false);
    let iduser;
    iduser = localStorage.getItem('iduser');
    const fetchNewsApprovedByAuthor = async() =>{
        try{
            setError(false);
            const newsfetch = await apiSettings.fetchNewsDeclinedByAuthor(iduser)
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
    },[triggerDel]) 

    const handleDelete =async(e) =>{
        console.log(e.target.value);   
        console.log("delete clicked");
        var id = e.target.value;
        if(id!=null){
            await fetch(`https://localhost:44387/api/News/${id}`,{
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json',
                    'accept': '*/*'  
                    }
                }
                )
            console.log("done");
            setTriggerDel(true);
            
        }
        else{
            console.log("null id");
        }
    }
    if(iduser==null){
        return (
            <Redirect to="/"/>
        )
    }
    
    return(
        <>
            <Header user={iduser} />
            <Wrapper>
                <Content>
                    <h2>Các bài viết đã bị hủy do không đảm bảo quy chuẩn một bài viết</h2>
                    {news!=null && news.articles.map((newsitem)=>{
                        return(
                            <News key={newsitem.id}>
                                <div className="wrapper-img">
                                    {newsitem.imageName!=null && <Image src={newsitem.imageName} alt="temp"/> }
                                    {newsitem.imageName==null && <Image src={noImg} alt="temp"/> }
                                </div>
                                <ContentNews>
                                    
                                    <p className="title">{newsitem.title}</p>
                                    <Link to={`/News/${newsitem.id}`}>
                                        <span className="readmore"> xem thêm...</span>
                                    </Link>
                                    {newsitem.topic!=null&&<p>Nhóm chủ đề: {newsitem.topic.topicname}</p>}
                                    {newsitem.subtopic!=null&&<p>Chủ đề: {newsitem.subtopic.subtopicname}</p>}
                                    <button className="deleteNews" value={newsitem.id} onClick={handleDelete}>Xóa</button>
                                </ContentNews>
                                
                            </News>
                        )
                    })}
                </Content>
            </Wrapper>
        </>
    )
}