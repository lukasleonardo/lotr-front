import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContainerItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4,240px);
  gap: 16px;
`