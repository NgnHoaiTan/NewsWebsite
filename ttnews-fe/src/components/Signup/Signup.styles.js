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
    .title-signuppage{
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
    .title-signuppage p{
        font-size: 30px;
        margin: 0;
    }
    .form-login{
        padding: 10px;
        background-color: rgba(255,255,255,0.4);
        width: 400px;
        height: 600px;
        margin: 0 auto;
        border-radius: 10px;
        box-shadow:2px 5px 3px rgba(0,0,0,0.3);
        position: absolute;
        top: 55%;
        left: 90%;
        transform: translate(-100%,-50%);
        
        
    }
    img{
        width: 100%;
    };
    h1{
        padding: 10px 0 10px;
        text-align: center;
        
    }
    .form-group{
        display: flex;
        flex-direction: column;
        padding: 5px;
        
        
    }
    .form-group label{
        font-size: 18px;
        margin-bottom: 10px 0 10px;
    }
    .form-group input{
        font-size: 16px;
        margin: 5px 0 5px;
        padding: 8px;
    }
    .login{
        text-align: center;
        margin:10px 0 10px
    }
    .submit-signup{
        padding: 10px;
        font-size: 20px;
        background-color: #232224;
        align-items: center;
        border: none;
        color:white;
        font-weight: 600;
        cursor: pointer;
    }
    .required{
        color: red;
    }
    
    
`