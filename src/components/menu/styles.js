import styled from 'styled-components';

export const Container = styled.nav`  
  padding: 16px 0;
  background-color: #2f558d;
  ul {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    margin: 0 auto;
    width: fit-content;

    li {
      a {
        color: #FFF;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  } 
`;
