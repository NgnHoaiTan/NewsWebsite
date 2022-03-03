
import { Wrapper, Content } from "./Profile.styles";
import avatar from '../../../image/cat.jpg';
import addTopicImg from '../../../image/background/topic.jpg';
import writeNewsImg from '../../../image/background/postnews.jpg'
import ApprovedImg from '../../../image/background/approved.jpg'
import DeclinedImg from '../../../image/background/declined.jpg'
import {Link} from "react-router-dom";
import { createBrowserHistory } from 'history';
import { Header } from "../../Header";
import { useUserFetch } from "../../../fetch/UserFetch";
import { Login } from "../../Login/Login";
const Profile =() =>{
    
    let iduser;
    iduser = localStorage.getItem('iduser');
    let history = createBrowserHistory()
    const {user} = useUserFetch(iduser);
    if(iduser==null){
        history.replace('/login');
       return <Login/>
    }
    let userfullname = "NA", userdateofbirth ="NA";
    if(user!=null){
        userfullname = user.fullname;
        userdateofbirth = user.dateofbirth;
    }
    console.log(user);
    return(
        <>
        <Header user={iduser} /> 
        <Wrapper>
            <Content>
                <div className="row info--profile">
                    <div className="avatar"><img src={avatar} alt="avt"/></div>
                    
                    <div className="info">
                        <h2>{userfullname!=null && userfullname}</h2>
                        <p>{userdateofbirth!=null && userdateofbirth}</p>
                    </div>
                </div>
                <div className="row-flex container-img_function">
                    <div className="img--add">
                        <Link to="/profile/Themchude">
                        
                            <img src={addTopicImg} id="img--add__topic" alt="alt"/>
                            <h4 className="title">Thêm chủ đề bài viết</h4>
                         </Link>
                         
                    </div>
                    <div className="img--add">
                        <Link to="/profile/Thembaiviet">
                        
                            <img src={writeNewsImg} id="img--add__news" alt="alt"/>
                            <h4 className="title">Viết bài</h4>
                         </Link>
                         
                    </div>
                    <div className="img--add">
                        <Link to="/profile/declined">
                        
                            <img src={DeclinedImg} id="img--add__news" alt="alt"/>
                            <h4 className="title">Tin đã bị hủy</h4>
                         </Link>
                         
                    </div>
                    <div className="img--add">
                        <Link to="/profile/approved">
                        
                            <img src={ApprovedImg} id="img--add__news" alt="alt"/>
                            <h4 className="title">Tin đã được duyệt</h4>
                         </Link>
                         
                    </div>
                </div>
                
                

            </Content>
        </Wrapper>
        </>
    )
}
export default Profile;