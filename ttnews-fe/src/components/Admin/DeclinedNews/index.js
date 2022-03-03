import { EmptyContainer,Wrapper,Content,Container } from "./DeclinedNews.styles";
import apiSettings from "../../../API";
import { useState,useEffect } from "react/cjs/react.development";
import { Link } from "react-router-dom";
import NoneofWork from "../../../image/background/Checklist.jpg";
const initialState ={
    articles:[],
 }
const DeclinedNews=({statusApprove})=>{
    const[state,setState] = useState(initialState);
    const[approve,setApprove] = useState(false);
    const [error,setError] = useState(false);
    const [empty, setEmpty] = useState(false);
    const fetchNews = async()=>{
        try{
            setError(false);          
            const news = await apiSettings.fetchNewsByStatus(statusApprove);
            
            setState(() => ({
                articles: [...news.articles]
            }));
            console.log(news.articles.length==0)
            if(news.articles.length==0){
                setEmpty(true);
            }
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


    if(empty){
        return (
            <>
                
                <EmptyContainer>
                    <h2>Danh sách tin bị hủy hiện trống</h2>
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
                        
                            <h3 className="title-news cut-text">Tiêu đề: {itemnews.title}</h3>
                            <div className="wrapper-info">
                                <p>Nhóm chủ đề: {itemnews.topic!=null ? itemnews.topic.topicname :"N/A"}</p>
                                <p>Chủ đề: {itemnews.subtopic!=null ? itemnews.subtopic.subtopicname: "N/A"}</p>
                            </div>
                            
                            <Link to={`/admin/news/viewdetaildecline/${itemnews.id}`}>
                                <button className="btn-detail">Xem chi tiết</button>
                            </Link>
                            
                                            
                       
                       
                    </div>
                </Content>
                </Wrapper>
                )
            
        })}
        </Container>
        </>
    )
};
export default DeclinedNews