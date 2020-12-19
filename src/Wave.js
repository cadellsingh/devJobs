import styled from "styled-components";

const WaveImg = styled.img`
  position: absolute;
  z-index: -1;
`;

const Wave = () => {
  return <WaveImg src="wave.svg" alt="wave image" />;
};

export default Wave;
