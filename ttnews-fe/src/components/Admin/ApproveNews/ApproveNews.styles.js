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
    grid-template-columns: 225px 225px 225px 225px;
    grid-row-gap: 30px;
    justify-content: space-evenly;
    
    
`
export const Wrapper=styled.div`
    width: 220px;
    min-height: 300px;
    background-color: #6da2de;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
    border-radius: 20px;
    overflow: hidden;
    position: relative;
`

export const Content=styled.div`
    
    border-radius: 20px;
    
    .header-approve{
        max-height: 250px;
        min-height: 250px;
        text-align:center;
        line-height: 20px;
        
    }
    h3,h4{
        margin: 0;
    }
    .title-news{
        height: 180px;
        background-color: #ffb291;
        padding-top: 20px;
    }
    .btn-detail{
        padding: 5px;
        font-size: 16px;
        background-color: #ffffff;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        position: relative;
        bottom: 15px;
        
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
        width: 83px;
    }
    .yes:hover{
        background-color: #08b708;
    }
    .no:hover{
        background-color: #ff0606;
    }
`