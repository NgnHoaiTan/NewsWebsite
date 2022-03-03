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
export const Container = styled.div`
    width: 100%;
    display:grid;
    grid-template-columns: 1fr 1fr ;
    grid-column-gap: 20px;
`
export const Admin = styled.div`
    background-color: #52aeef;
    padding: 10px;
    border-radius: 5px;
    min-height: 600px;
    max-height: max-content;
`
export const Users = styled.div`
    background-color: #ffa9a9;
    padding: 10px;
    border-radius: 5px;
    min-height: 600px;
    max-height: max-content;
`
export const Data = styled.div`
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 8px;
    height: 100px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-column-gap: 10px;
    .name{
        font-size: 17px;
        font-weight: 600;
    }
    button{
        font-size: 16px;
        background-color: #2aaeb1;
        color: white;
        border: none;
        padding: 5px;
        cursor: pointer;
        border-radius: 3px;
    }
    button:hover{
        background-color: #149497;
    }
    .id{
        font-size: 15px;
    }
    .avatar{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        overflow: hidden;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-color: #00b2ff;
    }
`