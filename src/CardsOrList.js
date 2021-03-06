import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTh } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const CardsOrListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
  color: black;

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
    border: 1px solid ${({ theme }) => theme.cardsOrListBorder};
    background-color: #045757;
  }

  @media (max-width: 680px) {
    display: none;
  }
`;

const activeColor = "white";

const CardIcon = styled.div`
  color: ${(props) => (props.displayStyle === "card" ? activeColor : null)};
`;

const ListIcon = styled.div`
  color: ${(props) => (props.displayStyle === "list" ? activeColor : null)};
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
