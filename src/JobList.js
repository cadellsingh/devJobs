import styled from "styled-components";

const JobListContainer = styled.div`
  display: grid;
  grid-template-columns: 80px 2fr 1fr;
  border-radius: 5px;
  padding: 10px;
  margin-top: 25px;
  //background-color: #212628;
  background-color: ${({ theme }) => theme.jobPostingBackground};

  & img {
    width: 60px;
    max-width: 100%;
    height: auto;
    margin: auto 0;
  }
`;

const JobDetails = styled.div`
  & p {
    padding: 5px;
  }

  & p:nth-child(2n) {
    //color: #03dac6;
    color: ${({ theme }) => theme.titleText};
  }

  & p:last-child {
    //color: #57a6ff
    color: ${({ theme }) => theme.companyText};
  }
`;

const JobType = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: auto 0;
`;

const JobList = ({ jobDetails }) => {
  const {
    company,
    company_logo: companyLogo,
    location,
    title,
    type,
    created_at: createdAt,
  } = jobDetails || {};

  return (
    <JobListContainer>
      <img src={companyLogo} alt={company} />
      <JobDetails>
        <p>{company}</p>
        <p>{title}</p>
        <p>{location}</p>
      </JobDetails>
      <JobType>
        <p>{type}</p>
        <p>5 hrs ago</p>
      </JobType>
    </JobListContainer>
  );
};

export default JobList;
