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
    
    
`;
