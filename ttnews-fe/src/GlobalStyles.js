import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
    :root{
        --maxWidth: 1280px;
        --White: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed:1.2rem;
         --fontSmall: 1rem;
    }
    *{
        box-sizing: border-box;
        font-family: 'Abel', 'sans-serif';

    }
    body{
        margin: 0;
        padding: 0;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    p{
        margin: 2px
    }
    h1{
        font-size: 2rem;
        font-weight: 600;
        margin: 0;
    }
    h2{
        margin: 0;
    }
    h3{
        font-size: 1.1rem;
        font-weight: 600;
        margin: 2px
    }
    p{
        font-size: 1rem;
        color: var(--black);
    }
    
`