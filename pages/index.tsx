import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const HomePage = () => {
  return (
    <Container>
      <Title>Welcome to DeepSeek Desktop</Title>
      <Description>Your AI assistant on the desktop</Description>
    </Container>
  );
};

export default HomePage; 