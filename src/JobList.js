import styled from "styled-components";

const JobListContainer = styled.div`
  //display: grid;
  //grid-template-columns: 80px 2fr 1fr;
  border-radius: 5px;
  padding: 10px;
  margin-top: 25px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.jobPostingBackground};
  cursor: pointer;

  :hover {
    border: 3px solid ${({ theme }) => theme.text};
  }

  & a {
    display: grid;
    grid-template-columns: 80px 2fr 1fr;
    text-decoration: none;
    color: inherit;
  }

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
    color: ${({ theme }) => theme.titleText};
    font-weight: 800;
  }

  & p:last-child {
    color: ${({ theme }) => theme.companyText};
    font-weight: 700;
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
    description,
    url,
  } = jobDetails || {};

  const handleOnClick = () => {
    console.log("test");
  };

  return (
    <JobListContainer onClick={handleOnClick}>
      <a href={url} target="_blank" rel="noreferrer">
        {companyLogo !== null ? (
          <img src={companyLogo} alt={company} />
        ) : (
          <img alt="" />
        )}
        <JobDetails>
          <p>{company}</p>
          <p>{title}</p>
          <p>{location}</p>
        </JobDetails>
        <JobType>
          <p>{type}</p>
          <p>5 hrs ago</p>
        </JobType>
      </a>
    </JobListContainer>
  );
};

export default JobList;
