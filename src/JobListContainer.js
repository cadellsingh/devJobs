import JobList from "./JobList";

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
