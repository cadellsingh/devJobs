import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const GithubIcon = () => {
  return (
    <div className="github-icon">
      <a
        href="https://github.com/cadellsingh/devJobs"
        target="_blank"
        rel="noreferrer"
        aria-label="Github Link"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};

export default GithubIcon;
