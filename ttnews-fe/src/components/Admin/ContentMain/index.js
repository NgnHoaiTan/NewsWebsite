import { NavTop, Wrapper,Content } from "./Content.styles";
import ApproveNews from "../ApproveNews";
import ApproveTopic from "../ApproveTopics"
import DeclinedTopic from "../DeclinedTopics";
import DeclinedNews from "../DeclinedNews";
import Authorize from "../Authorize"
import { useUserFetch } from "../../../fetch/UserFetch";
import { Redirect } from "react-router";
import HomeBGImg from "../../../image/background/admin_homepage.jpg";
export const ContentMain=({option})=>{

    const idadmin = localStorage.getItem('iduser');
    const role = localStorage.getItem('role');
    const {user} = useUserFetch(idadmin);
    
    if(role!=="boss"&&role!="admin" || idadmin==null){
        return(
            <Redirect to='/' />
        )
        
    }
    let userfullname = user.fullname!=null ? user.fullname : "";
    
    return(
            <>
            <Wrapper>
                <NavTop>
                    <h2 className="welcome">Xin chào {userfullname}</h2>
                </NavTop>
                <Content>
                    {option==='topic_approve' && <ApproveTopic
                        statusApprove='disapprove'
                        />} 
                    {option==='news_approve' && <ApproveNews
                        statusApprove="disapprove"
                        />} 
                    {option==='news_disapprove' && <DeclinedNews
                        statusApprove='declined'
                        />} 
                    {option==='topic_disapprove' && <DeclinedTopic
                        statusApprove='declined'
                        />} 
                    {option==='authorize' && 
                        <Authorize/>
                        } 
                    {option==="" && 
                    
                            <img src={HomeBGImg} alt="background" />
                     
                    }
                </Content>
              
            </Wrapper>
            </>
        )
    
    
    
}