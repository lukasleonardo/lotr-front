import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  max-width: 1008px;
  border-radius:6px ;
  background-color: #FFF;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  
  .image-container{
    height:160px;
    width:100%;
    border-radius:6px 6px 0 0;
    background-Color:#ABBBCC;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .movie-container{
    padding: 20px;
    h2{
      height: 54px;
      font-size: 18px;
      font-weight: 600;
    }
    p{
      font-size: 14px;
      font-weight: 400;
    }
  }

  .award-container{
    margin: 14px 0;
  }

  .movie-gross{
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h3{    
      font-size: 12px;
      font-weight: 600;
    } 
  }

  
`

