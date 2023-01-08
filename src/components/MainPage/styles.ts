import styled from 'styled-components';
import Background from '../../assets/background.svg';

export const Main = styled.div`
  position: relative;

  display: flex;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
`;
