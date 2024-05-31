import styled from "styled-components";

export const TopHeader = styled.div`
  background-color: #4C16C9;
  display: flex;
  width: 100vw;
  height: 56px;
  padding: 0 18px ; 
  justify-content: space-between;
  align-items: center;

  p{
    color: #fff;
  }
`
export const Container = styled.div`
  width: 100%;
  max-width: 1008px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 40px auto;
  padding-bottom:32px;
  border-bottom: 2px solid #D8E1EB;

  .info-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1{
    font-weight: 600;
    size: 28px;
    
  }
  p{
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    text-align: left;

  }

 

  input{
    border:unset;
    width: 200px;
    height: 40px;
    border-radius: 5px;
    border:1px;
    padding-left: 5px;
    
  }



  select{
    border:unset;
    width: 200px;
    height: 40px;
    border-radius: 5px;
    border:2px solid #f0f0f0;
    padding-left: 5px;
    
  }


`