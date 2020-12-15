import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <h1>devJobs</h1>
      <span className="icon">
        <FontAwesomeIcon icon={faSun} />
      </span>
    </header>
  );
};

export default Header;
