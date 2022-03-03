import styled from "styled-components"

export const Container = styled.div`
    background-color: var(--lightGrey);
    max-width: 1920px;
    height: max-content;
    padding-top: 30px;
    padding-bottom: 30px;
`
export const Content = styled.div`
    max-width: 1080px;
    background-color: white;
    border-radius: 40px;
    min-height: 100vh;
    max-height: 100%;
    margin: 0 auto;
    padding:20px;
    button{
        margin-left: 5px;
        padding: 0;
        outline: none;
        
    }
    
    .pagination-footer{
        display: flex;
        justify-content: right;
        margin-right: 30px;
        
        
    }
    .active-page{
        background-color:#ff441f; 
        border: none;
    }
    .active-page a{
        color: white;   
    } 
    button:hover{
        background-color:#2d2d2d
    } 
    button:hover a{
        color: white;
    }
    button a{
        font-size: 16px;
        text-decoration: none;
        color: black;
        padding: 10px;
    }
    .wrapper-formsearch{
        position: relative;
        padding: 10px 0 20px;
    }
    .form-search {
        position: absolute;
        left: 50%;
        transform: translateX(-45%);
    }
    .search {
        width: 34px;
        line-height: 32px;
        font-size: 20px;
        vertical-align: top;
    }

    input {
        margin-right: 5px;
        background: transparent;
        height: 32px;
        font-size: 20px;
        width: 300px;
    }
`