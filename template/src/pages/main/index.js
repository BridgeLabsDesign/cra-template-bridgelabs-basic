import React from 'react';
import { Container, Content } from './styles';
import { Buttons } from '../../components';

const Main = () => (
  <Container>
    <Content>
      <h1 style={{ fontSize: 20, marginBottom: 40, color: '#333' }}>
        Main Page
      </h1>

      <Buttons.Primary
        title="My Button"
        onClick={() => console.log('I am a button')}
        isSubmit
      />
    </Content>
  </Container>
);

export default Main;
