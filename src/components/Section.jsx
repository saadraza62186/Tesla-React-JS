import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

function useInView() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isInView];
}

function Section({ title, description, backgroundImg, leftbtn, rightbtn }) {
  const [ref, isInView] = useInView();

  return (
    <Wrap backgroundImg={backgroundImg} ref={ref}>
      <AnimatedDiv isInView={isInView}>
        <Itmetext>
          <h1>{title}</h1>
          <p>{description}</p>
        </Itmetext>
        
        <ButtonGroup>
          <LeftButton>{leftbtn}</LeftButton>
          {rightbtn && <RightButton>{rightbtn}</RightButton>}
        </ButtonGroup>
      </AnimatedDiv>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ backgroundImg }) => `url(${backgroundImg})`};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const fadeInBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedDiv = styled.div`
  opacity: 0;
  transform: translateY(20px);
  animation: ${({ isInView }) => (isInView ? fadeInBottom : '')} 0.5s ease-out forwards;
`;

const Itmetext = styled.div`
  padding: 15vh;
  text-align: center;
  h1 {
    font-size: 40px;
    font-weight: bold;
  }
  p {
    font-size: 16px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 230px;
  justify-content: center; 
  align-items: center;     

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 200px;
  }
  @media (max-width: 318px) {
    flex-direction: column;
    margin-top: 140px;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled.div`
  background-color: white;
  height: 40px;
  width: 256px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.65;
  text-transform: uppercase;
  font-size: 12px;
  margin: 8px;
`;
