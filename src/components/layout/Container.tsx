import React, { ReactNode } from 'react';
import { breakpoint, device } from './device';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  max-width: 100%;
  background: red;
  @media ${device.xs} {
    max-width: ${breakpoint.xs};
  }
  @media ${device.sm} {
    max-width: ${breakpoint.sm};
  }
  @media ${device.md} {
    max-width: ${breakpoint.md};
  }
  @media ${device.lg} {
    max-width: ${breakpoint.lg};
  }
  @media ${device.xl} {
    max-width: ${breakpoint.xl};
  }
  @media ${device.xxl} {
    max-width: ${breakpoint.xxl};
  }
`;

const Container = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
