import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const GridOrList = () => {
  return (
    <div className="grid-or-list">
      <div className="grid">
        <FontAwesomeIcon className="test" icon={faSun} />
        <p>Grid</p>
      </div>
      <div className="list">
        <FontAwesomeIcon icon={faSun} />
        <p>List</p>
      </div>
    </div>
  );
};

export default GridOrList;
