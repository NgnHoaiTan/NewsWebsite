import styled from "styled-components";
export const EmptyContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    h2{
        position: absolute;
        left: 10px;
        z-index:1;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
export const Container =styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-row-gap: 30px;
    
    
`
export const Wrapper=styled.div`
    width: 240px;
    height: 190px;
    background-color: #aea3f1;
    padding: 5px 0 5px;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
    margin-right: 20px;
    border-radius: 10px;
    
`

export const Content=styled.div`
    .header{
        height: 130px;
    }
    .title-subtopic{    
        font-size: 22px;
        text-align:center;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    p{
        font-size: 18px;
    }
    .topic-type{
        text-align:center;
    }
    h4{
        margin: 0;
    }
    .img{
        max-width: 100%;
    }
    .row{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .icon{
        margin-right: 5px;
    }
    .yes{
        background-color: #359335;
        border: none;
        padding: 5px 10px 5px;
        font-size: 17px;
        cursor: pointer;
        color: white;
    }
    .no{
        background-color: #f12b2b;
        border: none;
        padding: 5px 10px 5px;
        font-size: 17px;
        cursor: pointer;
        color:white;
    }
    .yes:hover{
        background-color: #08b708;
    }
    .no:hover{
        background-color: #ff0606;
    }
`