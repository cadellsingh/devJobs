import JobCard from "./JobCard";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-top: 40px;

  position: relative;
  transform-origin: bottom;
  animation: animateWave 1000ms cubic-bezier(0.23, 1, 0.32, 1) forwards;

  @media (max-width: 990px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
`;

const JobCardRow = ({ jobData }) => {
  // jobData = jobData || [];

  return (
    <GridContainer>
      {jobData.map((data, index) => {
        return (
          <CardContainer key={index}>
            <JobCard jobDetails={data} />
          </CardContainer>
        );
      })}
    </GridContainer>
  );
};

export default JobCardRow;
