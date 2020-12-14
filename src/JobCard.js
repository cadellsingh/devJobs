const JobCard = ({ jobDetails }) => {
  const {
    company,
    company_logo: companyLogo,
    location,
    title,
    type,
    created_at: createdAt,
  } = jobDetails || {};

  return (
    <div id="job-grid">
      <div className="logo-container">
        {/*<img className="company-logo" src={companyLogo} alt={company} />*/}
        <img className="company-logo" src={"/test.png"} alt="" />
      </div>
      <div>
        <p>5h ago</p>
        <span className="dot" />
        <p>{type}</p>
      </div>
      <p>{title}</p>
      <p>{company}</p>
      <p>{location}</p>
    </div>
  );
};

export default JobCard;
