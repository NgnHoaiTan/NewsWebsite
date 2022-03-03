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
    /* min-height: 300px; */
    background-color: #70a5ff;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    
`

export const Content=styled.div`
    
    border-radius: 20px;
    
    .header-approve{
        max-height: 250px;
        /* min-height: 250px; */
        text-align:center;
        line-height: 20px;
        padding: 10px;
        
    }
    h3,h4{
        margin: 0;
    }
    .title-news{
        color: white;
        height: 90px;
        
        

    }
    .wrapper-info{
        height: 70px;
    }
    .cut-text { 
        text-overflow: ellipsis;
        overflow: hidden;
        
    }
    .btn-detail{
        padding: 8px;
        font-size: 16px;
        background-color: #fff;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        margin-bottom: 10px;
        
    }
    .img{
        max-width: 100%;
    }
    
    .row{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    
`