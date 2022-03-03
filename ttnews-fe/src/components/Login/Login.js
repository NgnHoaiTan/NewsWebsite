import {useState} from "react";
import { Wrapper } from "./Login.styles";
//import { createBrowserHistory } from 'history';
import { Link, Redirect } from "react-router-dom";
import Home from '../Homepage/Home'


export const Login=()=>{


    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [role, setRole] = useState();
    const [LoggedIn, setLoggedIn] = useState(false);

    const handleLogin=async(e)=>{
        e.preventDefault();
        const data ={username:username,password:password};
        await fetch(`https://localhost:44387/authenticate?username=${data.username}&password=${data.password}`)
        .then(res => res.json()
        ).then(data=>{
            
            localStorage.setItem('token',data.token);
            localStorage.setItem('role',data.newsuser.role);
            localStorage.setItem('iduser',data.newsuser.id);
            console.log(localStorage);
            setRole(data.newsuser.role);
            setLoggedIn(true);
        })
        .catch(err =>{
            console.log(err);
        });
    }
    if(role==='user' && LoggedIn){
        return <Redirect to= {< Home/>} />
        
    }
    else if((role==='admin' || role==='boss') && LoggedIn){
        return <Redirect to ='/admin'/>
    } 
    
       
    return(
        <>
        
        <Wrapper>
            <div className="title-loginpage">
                <h1 className="tt-news_title">TTNews</h1>
                <p className="tt-news_quote">Welcome you to our Website</p>
            </div>
            <form className="form-login">
                <h1>Đăng nhập</h1>
                <div className="form-group">
                    <label htmlFor="username">Tài khoản</label>
                    <input type="text" className="username" name="username" onChange={(e)=>setUsername(e.target.value)} placeholder="Nhập tài khoản" autoComplete="off"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mật khẩu</label>
                    <input type="password" className="password" name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Nhập mật khẩu" autoComplete="off"/>
                </div>
                <div className="login">
                    <input type="submit" className="submit-login" name="login" value="Đăng nhập" onClick={handleLogin}/>
                </div>
    
                
                <div className="signup-option">
                    <p>Chưa có tài khoản ?</p>
                    <button className="sign-up" name="signup">
                    
                        <Link to="/signup">
                            Đăng ký
                        </Link>
                    </button>
                </div>
                <button className="accessguest" name="">
                    
                        <Link to="/">
                            Truy cập trang chủ - khách
                        </Link>
                </button>
                
            </form>
        </Wrapper>
       </> 
    )
}
