import { useState } from "react";
import JobCard from "./JobCard";
import JobList from "./JobList";

const DisplayJobListings = ({ jobData }) => {
  const [displayStyle, setDisplayStyle] = useState("list");

  // can have a component here for grid or list icons

  const jobDetails = jobData === undefined ? null : jobData[0];

  return (
    <div>
      {/*this will be grid or list depending on what the user chooses*/}
      {displayStyle === "grid" ? (
        <div id="grid-container">
          <JobCard jobDetails={jobDetails} />
          <JobCard jobDetails={jobDetails} />
          <JobCard jobDetails={jobDetails} />
          <JobCard jobDetails={jobDetails} />
        </div>
      ) : (
        <div>
          <JobList jobDetails={jobDetails} />
          <JobList jobDetails={jobDetails} />
          <JobList jobDetails={jobDetails} />
          <JobList jobDetails={jobDetails} />
        </div>
      )}
    </div>
  );
};

export default DisplayJobListings;
