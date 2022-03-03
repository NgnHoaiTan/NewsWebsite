import { EmptyContainer, Container,Wrapper,Content } from "./DeclinedTopics.styles";

// import { useSubTopicFetchByTopic } from "../../../fetch/FetchSubByStatus";
import apiSettings from "../../../API";
import { useState,useEffect } from "react/cjs/react.development";
import NoneofWork from "../../../image/background/Checklist.jpg";
const initialState ={
    subtopics:[],
 }
const DeclinedTopic=({statusApprove})=>{
    
    const[state,setState] = useState(initialState);
    const[approve,setApprove] = useState(false);
    const [error,setError] = useState(false);
    const [empty, setEmpty] = useState(false);
    const fetchsubTopics = async()=>{
        try{
            setError(false);          
            const subtopics = await apiSettings.fetchSubtopicByStatus(statusApprove);
            setState(() => ({
                subtopics,
            }));
            if(subtopics.length === 0){
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
        fetchsubTopics();
    },[approve])

    // Approve topic again
    const Approve =async(e)=>{
        console.log(e.target.value);
        if(state.subtopics!=null){
           state.subtopics.map(async(subtopic)=>{
            if(subtopic.id===e.target.value){
                const id = subtopic.id;
                const subtopicname = subtopic.subtopicname;
                const status = "approved";
                const topic ={
                    id:subtopic.topic.id,
                    topicname:subtopic.topic.topicname
                };
                const dataPost ={id,subtopicname,status,topic};
                var datajson = JSON.stringify(dataPost);
                console.log("approve clicked");
                await fetch(`https://localhost:44387/api/Subtopics/${id}`,{
                    method:'PUT',
                    headers:{
                        'Content-Type':'application/json',
                        'accept': '*/*'  
                    },
                    body:datajson
                    }
                    )
                setApprove(true)
            }
           })        
        }
    } 
    // delete topic declined
    const Delete = async(e) => {
        console.log(e.target.value);
        console.log("delete clicked");
        var id = e.target.value;
        if(id!=null){
            await fetch(`https://localhost:44387/api/Subtopics/${id}`,{
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json',
                    'accept': '*/*'  
                    }
                }
                )
            setApprove(true)  ;   
            console.log("done");
        }
        else{
            console.log("null id");
        }
        
    }
    if(state.subtopics.length===0 && empty){
        return (
            <>
                
                <EmptyContainer>
                    <h2>Danh sách chủ đề bị hủy hiện trống</h2>
                    <img src={NoneofWork} alt="nothing need to approve" />
                </EmptyContainer>
            </>
        )
    }  

    return(
        <>
        
        <Container>
         {state.subtopics.length !==0 &&state.subtopics.map(subtopic =>{
            return(
            <Wrapper key={subtopic.id}>
                <Content >
                   
                    <div className="header">
                        <div className="title-subtopic">
                            <h4>{subtopic.subtopicname}</h4>
                        </div>
                        
                        <div className="topic-type">
                            <p>Thuộc nhóm chủ đề:</p>
                            <p>{subtopic.topic.topicname}</p>
                            <i>Trạng thái: Đã hủy</i>
                        </div>
                    </div>
                    <div className="footer-approve row">
                        <button className="no" value={subtopic.id}  onClick={Delete}><i className="fas fa-times icon"></i>Xóa</button>
                        <button className="yes" value={subtopic.id} onClick={Approve}><i className="fas fa-check icon"></i>Duyệt lại</button>    
                    </div>    
                </Content>
            </Wrapper>
           ) })}
           </Container>
        </>
    )
};
export default DeclinedTopic;