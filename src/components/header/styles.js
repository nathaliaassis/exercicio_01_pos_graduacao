import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: fit-content;
  background-color: #2f558d;
`;


export const About = styled.div`
  display: flex;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 32px 16px;
  img {
    height: 120px;
    width: 120px;
    border-radius: 50%;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  color: #FFF;
  margin-left: 32px;
  
  h2 {
    font-size: 40px;
    margin-bottom: 8px;
  }

`;