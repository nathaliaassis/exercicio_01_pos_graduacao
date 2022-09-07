import React from 'react';
import { Container } from './styles';

const Menu = () => {
  return (
    <Container>
      <ul>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#description">Descrição</a>
        </li>
      </ul>
    </Container>
  );
}

export default Menu;