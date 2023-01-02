import styled from "styled-components";
import { GiSoundWaves } from "react-icons/gi";

const Header = () => {
  return (
    <Container>
      <GiSoundWaves color="hotpink" />
      <Logo>ProCast</Logo>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 40px;
  width: 100%;
  border-bottom: 0.5px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 12px;
  font-weight: 700;
`;
