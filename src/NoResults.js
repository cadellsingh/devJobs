import styled from "styled-components";

const StyledNoResults = styled.div`
  text-align: center;
  font-size: 20px;
  margin-top: 30px;
  color: ${({ theme }) => theme.text};
  font-weight: 700;
`;

const NoResults = () => {
  return (
    <StyledNoResults>
      <p>There aren't any jobs that match your search.</p>
    </StyledNoResults>
  );
};

export default NoResults;
