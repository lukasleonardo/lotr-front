import {createGlobalStyle} from 'styled-components'

 const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: #0C1932;
  }

  body{
    background-color: #F5F7FA;
  }

`
export default GlobalStyles