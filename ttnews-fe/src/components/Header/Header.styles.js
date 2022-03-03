import styled from "styled-components";
export const Wrapper = styled.div`
    background-color: var(--White);
    
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px 0 20px;
    
    .user-option{
        display: flex;
        align-items: center;
    }
    a{
        text-decoration: none;
        color: black;
        margin-right: 5px;
        
    }
`
export const NavBar = styled.div`
    ul{
        list-style-type: none;
        padding: 0;
    }
    .topic-list{
        list-style-type: none;
        margin: 0 auto;
        padding: 0;
        position: relative;
        
    }
    .topic-item{
        min-width: 130px;
        text-align: center;
        float: left;
        padding: 20px 10px;
        font-size: var(--fontMed);
        cursor: pointer;
        position: relative;
        
    }
    .topic-item > a{
        padding: 20px 30px;
    }
    .topic-item:hover{
        background-color: #48b8a9;
    }
    .subtopic-item:hover{
        background-color: #444444;
        color: white;
    }
    .subtopic-item:hover a{
        color: white;

    }
    
    .subtopic-list{
        position: absolute;
        background-color: #f0f0f0;
        top: 100%;
        min-width: 100px;
        right: 0;
        display: none;
        z-index:10;

    }
    .topic-item:hover >.subtopic-list{
        display: block;
    }
    .subtopic-item{
        padding: 8px 10px 8px;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        
    }
    
 
    
`
export const User = styled.img`
    height: 100%;
    width: 30px;
    cursor: pointer;
 

    
    
`

export const News = styled.div`
    
`