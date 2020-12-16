import { useState } from "react";
import JobCard from "./JobCard";
import JobList from "./JobList";
import CardsOrList from "./CardsOrList";

const DisplayJobListings = ({ jobData }) => {
  const [displayStyle, setDisplayStyle] = useState("list");

  const handleOnClick = (arg) => {
    arg === "card" ? setDisplayStyle("card") : setDisplayStyle("list");
  };

  const jobDetails = jobData === undefined ? null : jobData[0];

  return (
    <div>
      <div className="container">
        <p>50 results found</p>
        <CardsOrList
          handleOnClick={handleOnClick}
          displayStyle={displayStyle}
        />
      </div>
      {/*<CardsOrList handleOnClick={handleOnClick} displayStyle={displayStyle} />*/}
      {displayStyle === "card" ? (
        <div className="animate-postings">
          <div id="grid-container">
            <JobCard jobDetails={jobDetails} />
            <JobCard jobDetails={jobDetails} />
            <JobCard jobDetails={jobDetails} />
            <JobCard jobDetails={jobDetails} />
            <JobCard jobDetails={jobDetails} />
            <JobCard jobDetails={jobDetails} />
            <JobCard jobDetails={jobDetails} />
            <JobCard jobDetails={jobDetails} />
          </div>
        </div>
      ) : (
        <div className="animate-postings">
          <JobList jobDetails={jobDetails} />
          <JobList jobDetails={jobDetails} />
          <JobList jobDetails={jobDetails} />
          <JobList jobDetails={jobDetails} />
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
