import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTh } from "@fortawesome/free-solid-svg-icons";

const CardsOrList = ({ handleOnClick, displayStyle }) => {
  return (
    <div className="cards-or-list-container">
      <div
        className={displayStyle === "card" ? "active" : undefined}
        onClick={() => handleOnClick("card")}
      >
        <FontAwesomeIcon icon={faTh} />
        <p>Cards</p>
      </div>
      <div
        className={displayStyle === "list" ? "active" : undefined}
        onClick={() => handleOnClick("list")}
      >
        <FontAwesomeIcon icon={faList} />
        <p>List</p>
      </div>
    </div>
  );
};

export default CardsOrList;
