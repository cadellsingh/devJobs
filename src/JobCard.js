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
        <img className="company-logo" src={companyLogo} alt={company} />
        {/*<img className="company-logo" src={"/test.png"} alt="" />*/}
      </div>
      <div className="date-posted">
        <p>5h ago</p>
        <p>{type}</p>
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{company}</p>
        <p className="location">{location}</p>
      </div>
    </div>
  );
};

export default JobCard;
