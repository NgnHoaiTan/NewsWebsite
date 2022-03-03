import styled from "styled-components";
export const Container = styled.div`
    width: 100%;
    min-height:100vh;
    background-color: #e7e7e7;
    padding:10px;
    display: flex;
    overflow: hidden;
    padding-top: 50px;
    
`
export const Wrapper=styled.div`
    width: 800px;
    height: 100%;
    background-color: white;
    margin: 0 auto;
    border-radius: 5px;
`;
export const Content=styled.div`
    padding: 20px;

    .footer-decline{
       display: flex;
       justify-content: space-evenly;
    }
    button{
        margin: 20px;
    }
    .row{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .back>.icon{
        margin-right: 5px;
        font-size: 25px !important;

    }
    .back{
        background-color: #373ce7;
        border: none;
        padding: 5px 10px 5px;
        font-size: 25px;
        cursor: pointer;
        color: white;
        border-radius: 20px;
        width: 140px;
    }
   
    .back:hover{
        background-color: #373ce9;
    }
    
    .title-news p{
        font-size: 35px;
        font-weight: 700;
        text-align: center;
    }
    .topicname{
        font-size: 19px;
        color: #808080;
    }
    .icon{
        font-size: 17px;
    }
    .description-news p{
        font-size: 19px;
        font-weight: 600;
        margin-bottom: 10px;
    }
    .info-author{
        text-align: center;
        margin-bottom: 20px;
    }
    .img-news{
        width: 100%;
        text-align: center;
    }
    img{
        width: 70%;
    }
    .content p{
        font-size: 19px;
        line-height: 35px;
    }
    .yes{
        background-color: #359335;
        border: none;
        padding: 5px 10px 5px;
        font-size: 25px;
        cursor: pointer;
        color: white;
        border-radius: 20px;
        width: 140px;
    }
    .no{
        background-color: #f12b2b;
        border: none;
        padding: 5px 10px 5px;
        font-size: 25px;
        cursor: pointer;
        color:white;
        border-radius: 20px;
        width: 140px;
    }
    .yes:hover{
        background-color: #08b708;
    }
    .no:hover{
        background-color: #ff0606;
    }
`;