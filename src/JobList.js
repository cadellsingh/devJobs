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
    <div id="job-list">
      <img className="company-logo" src={companyLogo} alt={company} />
      <div className="main-details">
        <p>{company}</p>
        <p>{title}</p>
        <p className="location">{location}</p>
      </div>
      <div className="type">
        <p>{type}</p>
        <p>5 hrs ago</p>
      </div>
    </div>
  );
};

export default JobList;
