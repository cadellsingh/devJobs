import { useState, useEffect } from "react";
import JobCardRow from "./JobCardRow";
import JobListContainer from "./JobListContainer";
import CardsOrList from "./CardsOrList";

const DisplayJobListings = ({ jobData }) => {
  const [displayStyle, setDisplayStyle] = useState("card");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  if (windowWidth < 680 && displayStyle !== "card") {
    setDisplayStyle("card");
  }

  const handleOnClick = (arg) => {
    arg === "card" ? setDisplayStyle("card") : setDisplayStyle("list");
  };

  return (
    <div>
      <CardsOrList handleOnClick={handleOnClick} displayStyle={displayStyle} />

      {jobData.map((listing, index) => {
        const { data } = listing;

        // console.log(data);

        return displayStyle === "list" ? (
          <div key={index}>
            <JobListContainer jobData={data} />
          </div>
        ) : (
          <div key={index}>
            <JobCardRow jobData={data} />
          </div>
        );
      })}
    </div>
  );
};

export default DisplayJobListings;
