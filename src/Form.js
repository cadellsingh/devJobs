import styled from "styled-components";

const StyledForm = styled.form`
  padding: 5px;
  display: grid;
  grid-template-columns: 2fr 1fr 100px;
  border-radius: 5px;
  //background-color: #070910;
  background-color: ${({ theme }) => theme.formBackgroundColor};
  border: 1px solid #212628;
  border: 1px solid ${({ theme }) => theme.borderColor};

  & div {
    height: 60px;
    line-height: 60px;
  }

  & input[type="text"] {
    width: 100%;
    padding-left: 15px;
    outline: none;
    border: none;
    //background-color: #070910;
    background-color: ${({ theme }) => theme.formBackgroundColor};
    font-size: 15px;
    //color: white;
    color: ${({ theme }) => theme.text};
    vertical-align: center;
  }

  & ::placeholder {
    //color: white;
    color: ${({ theme }) => theme.text};
  }
`;

const FilterTitle = styled.div`
  @media (max-width: 900px) {
    grid-column: 1 / 5;
    //border-bottom: 1px solid #212628;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  }
`;

const LocationInput = styled.div`
  //border-left: 1px solid #212628;
  border-left: 1px solid ${({ theme }) => theme.borderColor};
  //border-right: 1px solid #212628;
  border-right: 1px solid ${({ theme }) => theme.borderColor};

  @media (max-width: 900px) {
    grid-column: 1 / 4;
    border-left: none;
  }
`;

const StyledButton = styled.div`
  margin: auto;

  & button {
    padding: 20px;
    //background-color: #045757;
    background-color: ${({ theme }) => theme.buttonBackgroundColor};
    outline: none;
    border: none;
    //color: white;
    color: ${({ theme }) => theme.buttonTextColor};
    font-size: 15px;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    border-top: 1px solid #212628;
    border-top: 1px solid ${({ theme }) => theme.borderColor};
    grid-column: 1/5;
    width: 100%;

    & button {
      width: 100%;
    }
  }
`;

const Form = ({ formInputs, dispatchInputs, handleFormSubmit }) => {
  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <div>
        <input
          aria-label="Filter Title"
          type="text"
          placeholder="Filter by title, company, expertise"
          value={formInputs.title}
          onChange={(event) =>
            dispatchInputs({ type: "description", value: event.target.value })
          }
        />
      </div>

      <LocationInput>
        <input
          aria-label="Filter Location"
          type="text"
          placeholder="Filter by location"
          value={formInputs.location}
          onChange={(event) =>
            dispatchInputs({ type: "location", value: event.target.value })
          }
        />
      </LocationInput>

      <StyledButton>
        <button type="submit">Search</button>
      </StyledButton>
    </StyledForm>
  );
};

export default Form;
