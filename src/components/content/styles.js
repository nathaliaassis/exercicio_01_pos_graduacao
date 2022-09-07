import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 16px;
  max-width: 400px;
  margin: 0 auto;

  h3 {
    font-size: 24px;
    margin-bottom: 16px;
  }
  & > a {
    font-size: 12px;
    font-weight: 600;
    color: #2f558d;
    text-decoration: none;
    &:hover { 
      text-decoration: underline;
    }
  }
`;