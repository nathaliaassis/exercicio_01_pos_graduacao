import React from 'react';
import Post from '../post';
import { Container } from './styles';

const Content = () => {
  return (
    <Container>
      <h3>Últimas do Blog</h3>

      <Post
        title='5 dicas para a sua carreira profissional'
        description='Confira algumas dicas que podem ajudar sua carreira como desenvolvedor front-end'
      />

      <Post
        title='5 dicas para a sua carreira profissional'
        description='Confira algumas dicas que podem ajudar sua carreira como desenvolvedor front-end'
      />

      <Post
        title='5 dicas para a sua carreira profissional'
        description='Confira algumas dicas que podem ajudar sua carreira como desenvolvedor front-end'
      />

      <a href='#'>Ver tudo</a>

    </Container>
  );
}

export default Content;