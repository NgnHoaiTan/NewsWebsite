import { useState, useEffect } from "react";
import { Wrapper } from "./NavSidebar.styles"
import logoAdmin from "../../../image/adminlogo.png"
import { Link, Redirect } from "react-router-dom";
export const NavSidebar=({setOption})=>{
    const [state,setState] = useState('');
    const idadmin = localStorage.getItem('iduser');
    const role = localStorage.getItem('role');
    const [logout, setLogout] = useState(false);
    useEffect(()=>{
        setOption(state)

    },[setOption,state])
    
    const handleLogout=()=>{
        localStorage.clear();
        setLogout(true);    
    }
    if(logout){
        return <Redirect to= '/login' />
   
    }
    return(
        <Wrapper>
            <div className="row">
                <div className="logo-wrapper">
                    <img src={logoAdmin} className="logo" alt="logo"/>
                </div>
                <h1>Administrator</h1>
            </div>
            <hr/>
            <h2>Tác vụ quản lí</h2>
            <ul className="list-tasks">
                <li value="topic_approve" onClick={(e)=>setState('topic_approve')}>Duyệt chủ đề</li>
                <li value="news_approve"onClick={(e)=>setState('news_approve')}>Duyệt bản tin</li>
                <li value="news_disapprove"onClick={(e)=>setState('news_disapprove')}>Danh sách tin đã hủy</li>
                <li value="topic_disapprove"onClick={(e)=>setState('topic_disapprove')}>Danh sách chủ đề đã hủy</li>
                {role=="boss" && <li value="authorize"onClick={(e)=>setState('authorize')}>Phân quyền người dùng <i className="fas fa-hand-sparkles icon-authorize"></i></li>}
                <li>
                    <Link to="/">
                        Chuyển hướng trang tin
                    </Link>
                </li>
                <li onClick={handleLogout}>Đăng xuất</li>
            </ul>
        </Wrapper>
    )
}