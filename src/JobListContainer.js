import JobList from "./JobList";
import styled from "styled-components";

const AnimateContainer = styled.div`
  position: relative;
  display: block;
  transform-origin: bottom;
  animation: animateWave 1000ms cubic-bezier(0.23, 1, 0.32, 1) forwards;
`;

const JobListContainer = ({ jobData }) => {
  return (
    <div className="animate-postings">
      {jobData.map((data, index) => {
        return (
          <div key={index}>
            <JobList jobDetails={data} />
          </div>
        );
      })}
    </div>
  );
};

export default JobListContainer;
