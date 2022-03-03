import styled from "styled-components";
export const Container = styled.div`
    background-color: var(--lightGrey);
    max-width: 1920px;
    min-height: 1000px;
    padding-top: 30px;
    padding-bottom: 30px;
`
export const Content = styled.div`
    max-width: 1080px;
    background-color: white;
    border-radius: 40px;
    min-height: 990px;
    margin: 0 auto;
    padding:20px;

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
        
    }
    .info-author{
        text-align: center;
        margin-bottom: 20px;
    }
    .img-news{
        width: 100%;
        text-align: center;
        margin: 30px 0 30px;
    }
    img{
        width: 70%;
    }
    .content p{
        font-size: 19px;
        line-height: 35px;
    }
`