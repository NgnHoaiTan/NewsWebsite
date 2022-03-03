import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: var(--lightGrey);
    max-width: 100%;
    height: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
`
export const Content = styled.div`
    max-width: 1080px;
    background-color:white ;  
    min-height: 110vh;
    margin: 0 auto;
    position: relative;

    h2{
        text-align: center;
        padding: 10px;
    }
`
export const News = styled.div`
    display: flex;  
    margin: 30px auto 30px ;
    background-color: #f2f5f0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow:1px 1px 1px 1px rgba(0,0,0,0.2);
    width: 95%;
    .wrapper-img{
        height: 240px;
        width: 320px;
        overflow: hidden;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: 320px;
    margin-right: 20px;
    object-fit: cover;
`;

export const ContentNews = styled.div`
    margin-left: 10px;
    p{
        font-size: 18px;
    }
    .title{
        font-size: 22px;
        font-weight: 600;
    }

    .readmore{
        font-size: 17px;
        font-weight: 500;
        color: red;
        margin-left:5px;
    }
    a{
        text-decoration: none;
        color: black;
        font-size: 20px;
    }
    .deleteNews{
        color: white;
        background: red;
        cursor: pointer;
        font-size: 17px;
        padding: 5px;
    }
`;