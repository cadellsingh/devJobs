import JobList from "./JobList";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  transform-origin: bottom;
  animation: animateWave 1000ms cubic-bezier(0.23, 1, 0.32, 1) forwards;
`;

const JobListContainer = ({ jobData }) => {
  // jobData = jobData || [];
  return (
    <Container>
      {jobData.map((data, index) => {
        return (
          <div key={index}>
            <JobList jobDetails={data} />
          </div>
        );
      })}
    </Container>
  );
};

export default JobListContainer;
