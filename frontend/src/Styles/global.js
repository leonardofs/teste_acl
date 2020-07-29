import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{ margin:0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center; 
        align-items: center; 
        width: 100%
    }
    body {
        background: linear-gradient(75deg, #54c7ba, #2282d0);
        -webkit-font-smoothing: antialiased !important;
    
    
    }

    body, input, button{
        color: #222;
        font-size:12;
        font-family: Arial, Helvetica, sans-serif

    }

    button{
        cursor: pointer;
    }


`;
