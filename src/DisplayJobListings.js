import JobCardRow from "./JobCardRow";
import JobListContainer from "./JobListContainer";

const DisplayJobListings = ({ jobData, displayStyle }) => {
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

  return <div>{displayPosting}</div>;
};

export default DisplayJobListings;
