import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTh } from "@fortawesome/free-solid-svg-icons";

const CardsOrList = ({ handleOnClick, displayStyle }) => {
  return (
    <div className="cards-or-list">
      <div className="cards-or-list-container">
        <div
          className={displayStyle === "card" && "active"}
          onClick={() => handleOnClick("card")}
        >
          <FontAwesomeIcon icon={faTh} />
          <p>Cards</p>
        </div>
        <div
          className={displayStyle === "list" && "active"}
          onClick={() => handleOnClick("list")}
        >
          <FontAwesomeIcon icon={faList} />
          <p>List</p>
        </div>
      </div>
    </div>
  );
};

export default CardsOrList;
