import JobList from "./JobList";
import JobCardRow from "./JobCardRow";
import { uid } from "./utils/uid";

const DisplayJobListings = ({ jobData, displayStyle }) => {
  const displayPosting = jobData.map((listing) => {
    const { data } = listing;

    let posting;

    if (data !== undefined) {
      if (displayStyle === "list") {
        posting = data.map((listing) => {
          return (
            <div key={uid()}>
              <JobList jobDetails={listing} />
            </div>
          );
        });
      } else {
        posting = <JobCardRow jobData={data} />;
      }
    } else {
      posting = null;
    }

    return posting;
  });

  return <div className="animate-postings">{displayPosting}</div>;
};

export default DisplayJobListings;
