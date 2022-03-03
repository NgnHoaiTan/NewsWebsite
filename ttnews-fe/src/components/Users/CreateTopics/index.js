import {useState} from "react";
import {useTopicFetch} from '../../../fetch/TopicFetch'
import { Header } from "../../Header";
import { Login } from "../../Login/Login";
import { Wrapper,Content } from "./CreateTopic.styles";
import { Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history';
const initialState ={
    topic:[],
 }
const CreateTopics=()=>{
    const {state, error} = useTopicFetch();
    const [subTopicname, setSubtopicname] = useState('');
    const [topic,setTopic] = useState(initialState);
    const [redirect, setRedirect] = useState(false);
    
    if(error) return <div>Something wrong happen</div>;
    let iduser;
    iduser = localStorage.getItem('iduser');
    let history = createBrowserHistory()
    if(iduser==null){
        history.replace('/login');
       return <Login/>
    }
    
    const handleChangeTopic=async(e)=>{
        const topicid = e.target.value; 
        console.log(topicid);
        const topicFetch = await (await fetch(`https://localhost:44387/api/Topics/${topicid}`)).json();
        console.log(topicFetch);
        setTopic(()=>({
            ...topicFetch
        }))

    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        
        const dataPost ={subTopicname,topic};
        console.log(JSON.stringify(dataPost));
        await fetch('https://localhost:44387/api/Subtopics',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'accept': 'text/plain'
                
            },
            body:JSON.stringify(dataPost)
        }
        ).then((res)=>{
            console.log(res.json());
            setRedirect(true);
            alert('Đăng ký chủ đề thành công!')

        }).catch(err => console.log(err))
    
        
        
        
    }
    const handleExit=()=>(
        setRedirect(true)
    );
    if(redirect){
        return <Redirect to="/profile" />
    }
    return(
        <>
            
            <Header user={iduser}/>
            <Wrapper>
                <Content>
                    <h2 className="header-title">Tạo chủ đề bản tin</h2>
                    <form className="form-create-news row-display-column">
                        <div className="row-item-input">
                            <label htmlFor="subtopicname" className="col-1">Tên chủ đề</label>
                            <input name="subtopicname" id="subtopic" 
                            placeholder="Nhập tên" 
                            className="col-2"
                            onChange={(e)=>setSubtopicname(e.target.value)}
                            />
                        </div>
        
                        <div className="row-item-input">
                            <label htmlFor="topic"className="col-1" >Thuộc nhóm chủ đề</label>
                            <select name="topic" className="col-2" onChange={handleChangeTopic} >
                            <option value="">Chọn chủ đề...</option>
                                {state.topics.map(topic => {
                                    
                                    return(
                                        <option value={topic.id} key={topic.id}>
                                        {topic.topicname}
                                        </option>
                                    )
                                   
                                  
                                })}
                            </select>
                            
                            
                        </div>
                        
                        <div className="row confirm-form">
                            
                            <button className="btn btn-cancel" onClick={handleExit}>Trở về</button> 
                            <button className="btn btn-register" onClick={handleSubmit}>Đăng ký chủ đề</button>  
                        </div>
                        
                    </form>
                </Content>
            </Wrapper>
        </>
    )
}


export default CreateTopics;