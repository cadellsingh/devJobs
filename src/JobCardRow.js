import JobCard from "./JobCard";
import { uid } from "./utils/uid";

const JobCardRow = ({ jobData }) => {
  return (
    <div id="grid-container">
      {jobData.map((data) => {
        return (
          <div key={uid()} className="card-container">
            <JobCard jobDetails={data} />
          </div>
        );
      })}
    </div>
  );
};

export default JobCardRow;
