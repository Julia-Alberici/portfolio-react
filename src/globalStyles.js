import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    body{
        margin: 0;
        padding: 0;
        font-family: 'Special elite', cursive;
        background-color: rgb(202, 202, 202);
        text-align: center;
        font-size: 1.2em;
    }

    @keyframes transitionBackground {
    0%{
        background-position: 0% 0% ;
    }
    25%{
        background-position: 25% 25% ;
    }
    50%{
        background-position: 50% 50% ;
    }
    75%{
        background-position: 75% 100% ;
    }
    100%{
        background-position: 0% 0% ;
    }
}
`;

export default GlobalStyle;
