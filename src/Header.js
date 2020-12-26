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

  & h1 {
    cursor: pointer;
  }

  & span {
    margin: auto 0;
    font-size: 40px;
    cursor: pointer;
  }

  @media (max-width: 550px) {
    font-size: 15px;

    & span {
      font-size: 30px;
    }
  }
`;

const Header = ({ theme, themeToggler }) => {
  return (
    <StyledHeader>
      <h1 onClick={() => window.location.reload(false)}>devJobs</h1>
      <span>
        <FontAwesomeIcon
          icon={theme === "light" ? faMoon : faSun}
          onClick={themeToggler}
        />
      </span>
    </StyledHeader>
  );
};

export default Header;
