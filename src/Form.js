import styled from "styled-components";

const StyledForm = styled.form`
  padding: 5px;
  display: grid;
  grid-template-columns: 2fr 1fr 100px;
  border-radius: 5px;
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
    background-color: ${({ theme }) => theme.formBackgroundColor};
    font-size: 15px;
    color: ${({ theme }) => theme.text};
    vertical-align: center;
  }

  & ::placeholder {
    color: ${({ theme }) => theme.text};
  }
`;

const FilterTitle = styled.div`
  @media (max-width: 750px) {
    border-right: 1px solid ${({ theme }) => theme.borderColor};
  }

  @media (max-width: 650px) {
    grid-column: 1 / 5;
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  }
`;

const LocationInput = styled.div`
  border-left: 1px solid ${({ theme }) => theme.borderColor};
  border-right: 1px solid ${({ theme }) => theme.borderColor};

  @media (max-width: 750px) {
    border: none;
  }

  @media (max-width: 650px) {
    grid-column: 1 / 4;
  }
`;

const StyledButton = styled.div`
  margin: auto;

  & button {
    padding: 20px;
    background-color: #045757;
    outline: none;
    border: none;
    color: white;
    font-size: 15px;
    cursor: pointer;
  }

  @media (max-width: 750px) {
    //border-top: 1px solid ${({ theme }) => theme.borderColor};
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
      <FilterTitle>
        <input
          aria-label="Filter Title"
          type="text"
          placeholder="Filter by title, company, expertise"
          value={formInputs.title}
          onChange={(event) =>
            dispatchInputs({
              type: "description",
              value: event.target.value,
            })
          }
        />
      </FilterTitle>

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
