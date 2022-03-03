import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: var(--lightGrey);
    max-width: 100%;
    min-height: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
`
export const Content = styled.div`
    max-width: 1080px;
    background-color:white ;
    
    min-height: 100vh;
    margin: 0 auto;
    position: relative;
    img{
        width: 100%;

    }
    .avatar{
        width: 150px;
        height: 150px;
        border-radius:50%;
        overflow: hidden;
    }
    .row{
        display: flex;
        flex-direction: column;
        justify-content: center;
        grid-column-gap: 20px;
    }
    .row-flex{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    .info--profile{
        align-items: center;
        background-color: rgba(15,102,99,0.7);
        margin-bottom: 50px;
        color: white;
        padding: 20px;
        
    }
    .container-img_function{
        margin: 0 auto;
 
    }
    
    .img--add{
        border: 5px solid white;
        width: 400px;
        height: 100%;
        text-align: center;
        position: relative;
        transition: ease-in-out 0.2s;
        border-radius: 10px;
        margin-bottom: 10px;
    }
    #img--add__topic{
        opacity: 0.8;
        width: 85%;
        transition: ease-in-out 0.3s;
        
    }
    #img--add__news{
        opacity: 0.8;
        width: 85%;
        transition: ease-in-out 0.3s;
    }
    h4{
        margin: 0;
       
    }
    .title{
        background-color: #F07743;
        padding: 15px 30px 30px;
        color: white;
        font-size: 20px;
        text-align: center;
        
       
        
    }
    .img--add:hover 
    #img--add__topic, .img--add:hover #img--add__news{
        opacity: 1;
        transition: ease-in-out 0.4s;
    }
    .img--add:hover{
        //border: 3px solid #12BD51;
        transition: ease-in-out 0.1s;
        box-shadow: 3px 2px 5px 2px rgba(117,118,118,0.7);
    }
    a{
        text-decoration: none;
    }
    
`