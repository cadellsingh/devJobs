import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const GithubIconContainer = styled.div`
  & a {
    color: #045757;
    font-size: 50px;
    bottom: 0;
    position: fixed;
    margin: 20px;
  }

  & a:hover {
    color: white;
  }

  @media (max-width: 900px) {
    & a {
      margin: 5px;
      font-size: 30px;
    }
  }

  @media (max-width: 400px) {
    & a {
      margin: 3px;
      font-size: 20px;
    }
  }
`;

const GithubIcon = () => {
  return (
    <GithubIconContainer>
      <a
        href="https://github.com/cadellsingh/devJobs"
        target="_blank"
        rel="noreferrer"
        aria-label="Github Link"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </GithubIconContainer>
  );
};

export default GithubIcon;
