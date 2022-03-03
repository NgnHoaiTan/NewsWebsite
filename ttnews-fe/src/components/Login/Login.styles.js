import styled from "styled-components";
import BackgroundLogin from '../../image/backgroundLogin.jpg';
export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${BackgroundLogin});
    background-size: 100%;
    background-repeat: no-repeat;
    object-fit: contain;
    position: absolute;
    z-index:-1;
    top: 0;
    .title-loginpage{
        color: white;
        position: absolute;
        top: 10%;
        left: 5%;
    }
    .tt-news_title{
        color: white;
        font-size: 90px;
        text-align: left;
        margin: 0;
        padding: 0;
    }
    .title-loginpage p{
        font-size: 30px;
        margin: 0;
    }
    .form-login{
        padding: 10px;
        background-color: rgba(255,255,255,0.4);
        width: 400px;
        height: 500px;
        margin: 0 auto;
        border-radius: 10px;
        box-shadow:2px 5px 3px rgba(0,0,0,0.3);
        position: absolute;
        top: 50%;
        left: 90%;
        transform: translate(-100%,-50%);
        
        
    }
    img{
        width: 100%;
    };
    h1{
        padding: 20px 0 40px;
        text-align: center;
        
    }
    .form-group{
        display: flex;
        flex-direction: column;
        padding: 5px;
        
        
    }
    .form-group label{
        font-size: 20px;
        margin-bottom: 10px 0 10px;
    }
    .form-group input{
        font-size: 17px;
        margin: 10px 0 10px;
        padding: 8px;
    }
    .login{
        text-align: center;
        margin:10px 0 10px
    }
    .submit-login{
        padding: 10px;
        font-size: 20px;
        background-color: #232224;
        align-items: center;
        border: none;
        color:white;
        font-weight: 600;
        cursor: pointer;
    }
    .signup-option{
        padding: 20px 0 0 0;
        text-align: center;
    }
    .signup-option p{
        font-size: 20px;
        margin-bottom: 10px;
        
    }
    .sign-up{
        padding: 8px;
        font-size:20px;
        background-color: #8a8a8a;
        border: none;
        color:white;
        font-weight: 600;
        cursor: pointer;
    }
    .sign-up > a{
        color: white;
        text-decoration: none;
    }
    .sign-up:hover{
        background-color: #262626;
        transition: ease-in-out 0.2s;
    }
    .accessguest{
        background-color: #ffffff;
        padding: 5px;
        border: none;
        border-radius: 3px;
        text-align: center;
        margin:10px auto 10px;
        display: block;
    }
    .accessguest a{
        color: black;
        text-decoration: none;
        font-size: 16px;
    }

`