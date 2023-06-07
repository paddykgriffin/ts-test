import React from 'react';
import styled from 'styled-components';
import Heading from '../components/typography/Heading';

const Paragraphy = styled.div`
  padding: 2rem;
`;

const ComponentTest = () => {
  return (
    <>
      <Heading title="test title" />
      <Paragraphy>test</Paragraphy>
    </>
  );
};

export default ComponentTest;
