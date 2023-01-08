import styled from 'styled-components';
import Background from '../../assets/background.svg';

export const Main = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
`;
