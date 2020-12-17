import { useState } from "react";
import JobList from "./JobList";
import CardsOrList from "./CardsOrList";
import JobCardRow from "./JobCardRow";
import { uid } from "./utils/uid";

const DisplayJobListings = ({ jobData }) => {
  const [displayStyle, setDisplayStyle] = useState("list");

  const handleOnClick = (arg) => {
    arg === "card" ? setDisplayStyle("card") : setDisplayStyle("list");
  };

  let displayListing;

  if (jobData !== undefined) {
    if (displayStyle === "list") {
      displayListing = jobData.map((data) => {
        return (
          <div key={uid()}>
            <JobList jobDetails={data} />
          </div>
        );
      });
    } else {
      displayListing = <JobCardRow jobData={jobData} />;
    }
  } else {
    displayListing = null;
  }

  return (
    <div>
      <div className="container">
        <p>{jobData === undefined ? null : jobData.length} jobs available</p>
        <CardsOrList
          handleOnClick={handleOnClick}
          displayStyle={displayStyle}
        />
      </div>

      <div className="animate-postings">{displayListing}</div>
    </div>
  );
};

export default DisplayJobListings;
