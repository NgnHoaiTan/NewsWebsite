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
    height: 80vh;
    margin: 0 auto;
    position: relative;


    .header-title{
        padding: 20px;
        background-color:#F58835;
    }
    h2{
        margin: 0 auto;
    }
    .form-create-news{
        padding: 20px;
    }
    .row-display-column{
        display: flex;
        flex-direction:column;
        align-items: center;
    }
    .row-item-input{
        display: flex;
        width: 90%;
        padding: 15px 0 15px;
        flex-wrap: wrap;
    }
    .row-item-input + .row-item-input{
        margin-top: 20px;
    }
    label{
        font-size: 18px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 600;
    }
    input{
        padding: 8px;
        width: 100%;
        font-size: 16px;
    }
    input[type="file"]{
        margin: 0;
        padding: 0;
    }
    select{
        padding: 8px;
        width: 25%;
        font-size: 16px;
    }
    .col-1{
        width: 30%;
    }
    .col-2{
        max-width: 70%;
    }
    textarea{
        width: 70%;
        height: 150px;
    }
    .btn{
        width: 150px;
        padding: 10px;
        font-weight: 600;
        cursor: pointer;
    }
    .row{
        display: flex;
        justify-content: space-between;
        width: 70%;
    }
    .btn-cancel{
        background-color: #FCAD37;
        font-size: 18px;
        outline: none;
        border: none;
    }
    .btn-register{
        background-color: #2CD03C;
        font-size: 18px;
        outline: none;
        border: none;
    }
    .btn-cancel:hover ,.btn-register:hover {
        opacity: 0.9;
    }
    .confirm-form{
        margin: 20px 0 20px;
        padding: 20px 0 20px;
    }


    `