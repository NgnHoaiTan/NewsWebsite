import styled from "styled-components";

export const Wrapper=styled.div`
    height: 96vh;
    width: 400px;
    background-color: white;
    border-radius: 20px;
    
    h2{
        padding: 5px 5px;
    }
    .row{
        display: flex;
        align-items: center;
        
    }
    .logo-wrapper{
        width: 80px;
    }
    .logo{
        width: 100%;
    }

    .list-tasks{
        list-style-type: none;
        margin: 0;
        padding: 0;
        
    }
    .list-tasks li{
       
       font-size: 19px;
       padding: 10px;
       cursor: pointer;
       margin: 5px 0;
       border-bottom: 2px solid white;
    }
    .list-tasks li a{
        color: black;
        text-decoration: none;
    }
    .list-tasks li:hover{
        border-bottom: 2px solid black;
        transition: ease-in-out 0.2s;
        background-color: #aeaef7;
    }
    .icon-authorize{
        color: #ff6a00;
        
    }
    
`