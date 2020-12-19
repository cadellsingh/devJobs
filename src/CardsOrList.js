import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTh } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const CardsOrListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  & svg {
    margin: auto 10px auto auto;
  }

  & p {
    margin: auto 0;
    vertical-align: center;
  }

  & div {
    display: flex;
    padding: 15px;
    cursor: pointer;
    border: 1px solid #212628;
  }
`;

const activeBackgroundColor = "#045757";

const CardIcon = styled.div`
  background-color: ${(props) =>
    props.displayStyle === "card" ? activeBackgroundColor : null};
`;

const ListIcon = styled.div`
  background-color: ${(props) =>
    props.displayStyle === "list" ? activeBackgroundColor : null};
`;

const CardsOrList = ({ handleOnClick, displayStyle }) => {
  return (
    <CardsOrListContainer>
      <CardIcon
        displayStyle={displayStyle}
        onClick={() => handleOnClick("card")}
      >
        <FontAwesomeIcon icon={faTh} />
        <p>Cards</p>
      </CardIcon>
      <ListIcon
        displayStyle={displayStyle}
        onClick={() => handleOnClick("list")}
      >
        <FontAwesomeIcon icon={faList} />
        <p>List</p>
      </ListIcon>
    </CardsOrListContainer>
  );
};

export default CardsOrList;
