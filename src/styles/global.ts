import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        
    }
    body{
        background-color: ${props => props.theme.background};
        margin: 0px 10%;
    }

    h1{
        font-family: "Baloo 2", sans-serif;
    }

`