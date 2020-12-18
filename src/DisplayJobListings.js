import { useState } from "react";
import JobCardRow from "./JobCardRow";
import JobListContainer from "./JobListContainer";
import CardsOrList from "./CardsOrList";

const DisplayJobListings = ({ jobData }) => {
  const [displayStyle, setDisplayStyle] = useState("list");

  const handleOnClick = (arg) => {
    arg === "card" ? setDisplayStyle("card") : setDisplayStyle("list");
  };

  const displayPosting = jobData.map((listing, index) => {
    const { data } = listing;

    return displayStyle === "list" ? (
      <div key={index}>
        <JobListContainer jobData={data} />
      </div>
    ) : (
      <div key={index}>
        <JobCardRow jobData={data} />
      </div>
    );
  });

  return (
    <div>
      <CardsOrList handleOnClick={handleOnClick} displayStyle={displayStyle} />

      {displayPosting}
    </div>
  );
};

export default DisplayJobListings;
