import {useEffect, useState} from "react";
import { Wrapper } from "./Signup.styles";
//import { createBrowserHistory } from 'history';
import { Link, Redirect } from "react-router-dom";

import apiSettings from "../../API";


export const Signup=()=>{


    const [ausername, setUsername] = useState('');
    const [apassword, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    const [afullname, setFullname] = useState('');
    const [adateofbirth, setDateofbirth] = useState();
    const [redirect, setRedirect] = useState(false);
    const [listUser, setListUser] = useState();
    const [error, setError] = useState(false);
    const fetchUsers = async()=>{
        try{
            setError(false);
            const users = await apiSettings.fetchAllUsers();
            setListUser({
                users:[...users]
            })
            
        }
        catch{
            setError(true);
        }
    }
    useEffect(()=>{
        fetchUsers();
    },[])
    console.log(listUser);
    const submitSignup=(e)=>{
        e.preventDefault();
        if(apassword!==repassword){
            alert("Mật khẩu không trùng khớp");        
            return false;
        }
        else if(afullname.trim()==""||ausername.trim()==""||apassword.trim()==""){
            alert("Vui lòng nhập đủ các thông tin yêu cầu");
            return false;
        }
        else{
            listUser.users.map(user=>{
                if(ausername == user.username){
                    alert("Trùng tên đăng nhập");
                    
                    return false;
                    
                }
            })
        }
        return true;
        
    }
    const handleSignup =async(e)=>{
        console.log("submit");
        const validate = submitSignup(e);
        if(validate){
            console.log("validate true")
            var fullname = afullname;
            var username = ausername;
            var userpassword = apassword;
            var dateofbirth = new Date(adateofbirth);
            console.log(dateofbirth);
            const data = {fullname, username, userpassword, dateofbirth}
            const postUser  = fetch(`https://localhost:44387/api/Newsusers`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'accept': 'text/plain'
                    
                },
                body:JSON.stringify(data)
            }).then((data)=>{
                console.log(data.json());
                setRedirect(true);
                alert('Đăng ký thành công, xin mời đăng nhập');
    
            }).catch((err)=>{
                console.log(err);
            })
        }
       
        
        //console.log(postUser);
    }
    if(redirect){

        return <Redirect to= '/login' />
    }
    return(
        <>
        
        <Wrapper>
            <div className="title-signuppage">
                <h1 className="tt-news_title">TTNews</h1>
                <p className="tt-news_quote">Welcome you to our Website</p>
            </div>
            <form className="form-login">
                <h1>Đăng ký</h1>
                <div className="form-group">
                    <label htmlFor="username">Họ và tên<span className="required">*</span></label>
                    <input type="text" className="fullname" name="fullname" onChange={(e)=>setFullname(e.target.value)}  placeholder="Nhập họ tên của bạn" autoComplete="off"/>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Tài khoản<span className="required">*</span></label>
                    <input type="text" className="username" name="username" onChange={(e)=>setUsername(e.target.value)} placeholder="Nhập tài khoản" autoComplete="off"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mật khẩu<span className="required">*</span></label>
                    <input type="password" className="password" name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Nhập mật khẩu" autoComplete="off" />
                </div>
                <div className="form-group">
                    <label htmlFor="repassword">Xác nhận mật khẩu<span className="required">*</span></label>
                    <input type="password" className="password" name="repassword" onChange={(e)=>setRePassword(e.target.value)} placeholder="Xác nhận mật khẩu" autoComplete="off"/>
                </div>
                <div className="form-group">
                    <label htmlFor="dateofbirth">Ngày sinh<span className="required">*</span></label>
                    <input type="date" className="dateofbirth" name="dateofbirth" onChange={(e)=>setDateofbirth(e.target.value)} />
                </div>
                <div className="login">
                    <input type="submit" className="submit-signup" name="singup" value="Đăng ký" onClick={(e) => handleSignup(e)}/>
                </div>
                
            </form>
        </Wrapper>
       </> 
    )
}
