import React from 'react';
import { Container } from './styles';

const Post = ({ title, description }) => {

  return (
    <Container>
      <a href="/#">{title}</a>
      <p>{description}</p>
    </Container>
  );
};

export default Post;