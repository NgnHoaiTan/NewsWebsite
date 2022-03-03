import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--lightGrey);
    max-width: 1920px;
    min-height: 100vh;
    max-height: max-content;
    padding-top: 30px;
    padding-bottom: 30px;
`
export const Content = styled.div`
    position: relative;
    max-width: 1080px;
    background-color: white;
    border-radius: 40px;
    height: 100%;
    margin: 0 auto;
    padding:20px;

    .form-search {
        position: absolute;
        right: 20px;
        top: 48px;
    }
    .search {
        width: 34px;
        line-height: 32px;
        font-size: 24px;
        vertical-align: top;
    }

    input {
        margin-right: 5px;
        background: transparent;
        height: 32px;
        font-size: 24px;
        width: 300px;
    }
`