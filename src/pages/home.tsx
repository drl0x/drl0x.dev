import React from 'react';
import styled from 'styled-components';
import StarField from '../components/background';

const StarFieldWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const HomeContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const TitleSpan = styled.span<{ fontSize: number }>`
  color: white;
  font-family: 'Inconsolata', monospace;
  font-size: ${({ fontSize }) => `${fontSize}px`};
`;

export const Home = () => {
  return (
    <>
      <HomeContent>
        <TitleWrapper>
          <TitleSpan
            fontSize={48}
            onClick={() => {
              window.location.href = 'https://twitter.com/drl0x_';
            }}
          >
            drl0x_
          </TitleSpan>
        </TitleWrapper>
      </HomeContent>
      <StarFieldWrapper>
        <StarField />
      </StarFieldWrapper>
    </>
  );
};
