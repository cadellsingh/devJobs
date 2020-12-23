import styled from "styled-components";

const JobGrid = styled.div`
  border-radius: 10px;
  padding: 25px;
  display: grid;
  background-color: ${({ theme }) => theme.jobPostingBackground};
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  position: relative;
`;

const LogoContainer = styled.div`
  & img {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    position: absolute;
    top: -8px;
    left: 5%;
  }
`;

const DatePostedContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`;

const JobDetailsContainer = styled.div`
  & p:first-child {
    color: ${({ theme }) => theme.titleText};
    font-weight: 800;
    font-size: 18px;
    margin: 10px 0;
  }

  & p:nth-child(2n) {
    margin-bottom: 30px;
  }

  & p:last-child {
    color: ${({ theme }) => theme.companyText};
    font-weight: 700;
  }
`;

const JobCard = ({ jobDetails }) => {
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

  return (
    <JobGrid>
      <LogoContainer>
        {companyLogo !== null ? (
          <img src={companyLogo} alt={company} />
        ) : (
          <img alt="" />
        )}
      </LogoContainer>
      <DatePostedContainer>
        <p>5h ago</p>
        <p>{type}</p>
      </DatePostedContainer>
      <JobDetailsContainer>
        <p>{title}</p>
        <p>{company}</p>
        <p className="location">{location}</p>
      </JobDetailsContainer>
    </JobGrid>
  );
};

export default JobCard;
