import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  color: white;
  font-size: 20px;
  font-weight: bold;

  & span {
    margin: auto 0;
    font-size: 40px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>devJobs</h1>
      <span>
        <FontAwesomeIcon icon={faSun} />
      </span>
    </StyledHeader>
  );
};

export default Header;
