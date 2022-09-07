import React from 'react';
import { Container, About, TextBox } from './styles';
import profileImg from '../../assets/imgs/profile.jpg';

const Header = () => {
  return (
    <Container>
      <About>
        <img src={profileImg} alt="foto de perfil" />

        <TextBox>
          <h2>Nathália Assis</h2>
          <p>
            Meu nome é Nathália, tenho 24 anos, sou casada e sou formada em
            Análise e Desenvolvimento de Sistemas. Aqui de forma resumida é um
            texto que fala um pouco mais sobre mim, aqui de forma resumida é um
            texto que fala um pouco mais sobre mim, aqui de forma resumida é um
            texto que fala um pouco mais sobre mim.
          </p>
        </TextBox>
      </About>
    </Container>
  );
}

export default Header;