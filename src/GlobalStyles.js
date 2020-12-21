import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    html {
      background-color: ${({ theme }) => theme.body};
      transition: all .50s linear;
    }
    
    body {
      margin-bottom: 100px;
    }

    @keyframes animateWave {
      0% {
        transform: scale(1, 0);
      }
      100% {
        transform: scale(1, 1);
      }
    }
    
    
`;
