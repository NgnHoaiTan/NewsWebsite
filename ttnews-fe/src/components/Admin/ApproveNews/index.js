import { EmptyContainer,Wrapper,Content,Container } from "./ApproveNews.styles";
//import TempApproveImg from '../../../image/temp_approve.jpg';
import apiSettings from "../../../API";
import { useState,useEffect } from "react/cjs/react.development";
import { Link } from "react-router-dom";
import NoneofWork from "../../../image/background/Checklist.jpg";
const initialState ={
    articles:[],
 }
const ApproveNews=({statusApprove})=>{
    const[state,setState] = useState(initialState);
    const[approve,setApprove] = useState(false);
    const [error,setError] = useState(false);
    const fetchNews = async()=>{
        try{
            setError(false);          
            const news = await apiSettings.fetchNewsByStatus(statusApprove);
            
            setState(() => ({
                articles: [...news.articles]
            }));
        }
        catch(error){
            setError(true);
        }
        setApprove(false);
    }
    useEffect(()=>{
        setState(initialState);
        fetchNews();
    },[approve])


    const Approve =async(e)=>{
        
        if(state.articles!=null){
           state.articles.map(async(itemnews)=>{
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
                
                await fetch(`https://localhost:44387/api/News/${id}`,{
                    method:'PUT',
                    headers:{
                        'Content-Type':'application/json',
                        'accept': '*/*'  
                    },
                    body:datajson
                    }
                    ).then((data)=>
                        console.log(data)
                    ).catch(err => console.log(err))
                    let totalView = 0;
                    let idNews = id;
                    let dataview = {totalView, idNews};
                    console.log(dataview);
                    await fetch('https://localhost:44387/api/Views',{
                            method: 'POST',
                            headers:{
                                'Content-Type':'application/json',
                                'accept': 'text/plain'    
                            },
                            body:JSON.stringify(dataview)
                        }).then((data)=>{
                            console.log(data);
                        }).catch((err)=>{
                            console.log(err);
                        })
                    setApprove(true);
                }
           })        
        }
    } 
    
    
    const Decline =async(e)=>{
        
        if(state.articles!=null){
           state.articles.map(async(itemnews)=>{
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
                
                await fetch(`https://localhost:44387/api/News/${id}`,{
                    method:'PUT',
                    headers:{
                        'Content-Type':'application/json',
                        'accept': '*/*'  
                    },
                    body:datajson
                    }
                    ).then((data) =>
                        console.log(data)
                    ).catch(err => console.log(err))
                
                  
                setApprove(true)
            }
           })        
        }
    }  
    
    if(state.articles.length==0){
        return (
            <>
                
                <EmptyContainer>
                    <h2>Không bảng tin nào cần duyệt</h2>
                    <img src={NoneofWork} alt="nothing need to approve" />
                </EmptyContainer>
            </>
        )
    }
    else if(state.articles!=null)
    return(
        <>
        <Container>
        {state.articles!=null&&state.articles.map(itemnews =>{
            return(
                <Wrapper key={itemnews.id}>
                <Content>
                    <div className="header-approve">
                        <div className="title-news">
                            <h3>Tiêu đề: {itemnews.title}</h3>
                            <p>Nhóm chủ đề: {itemnews.topic!=null ? itemnews.topic.topicname :"N/A"}</p>
                            <p>Chủ đề: {itemnews.subtopic!=null ? itemnews.subtopic.subtopicname: "N/A"}</p>
                            
                            
                        </div> 
                        <Link to={`/admin/news/viewdetail/${itemnews.id}`}>
                                <button className="btn-detail">Xem chi tiết</button>
                        </Link>                   
                        <p>Sửa đổi lần cuối: {itemnews.time_update_news!=null ? itemnews.time_update_news : "N/A"}</p>
                        
                    </div>
                    
                    <div className="footer-approve row">
                        <button className="no"value={itemnews.id} onClick={Decline}><i className="fas fa-times icon"></i>Hủy</button>
                        <button className="yes"value={itemnews.id} onClick={Approve}><i className="fas fa-check icon"></i>Duyệt</button>    
                    </div>
                    
                </Content>
                </Wrapper>
                )
            
        })}
        </Container>
        </>
    )
};
export default ApproveNews