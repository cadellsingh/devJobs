import JobCard from "./JobCard";

const JobCardRow = ({ jobData }) => {
  return (
    <div id="grid-container" className="animate-postings">
      {jobData.map((data, index) => {
        return (
          <div key={index} className="card-container">
            <JobCard jobDetails={data} />
          </div>
        );
      })}
    </div>
  );
};

export default JobCardRow;
