import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 5rem;
`;

interface HeadingProps {
  title: string;
}

const Heading = ({ title }: HeadingProps) => {
  return <H1>{title}</H1>;
};

export default Heading;
