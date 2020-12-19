import "./App.css";
import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import Header from "./Header";
import Form from "./Form";
import DisplayJobListings from "./DisplayJobListings";
import ShowMore from "./ShowMore";
import Wave from "./Wave";
import GithubIcon from "./GithubIcon";

const inputs = {
  description: "",
  location: "",
};

const formInputsReducer = (state, action) => {
  const value = action.value;

  switch (action.type) {
    case "description":
      return { ...state, description: value };
    case "location":
      return { ...state, location: value };
    default:
  }
};

const apiDetails = {
  url: "https://jobs.github.com/positions.json?",
  pageNumber: 1,
};

const apiReducer = (state, action) => {
  switch (action.type) {
    case "show-more":
      return { ...state, pageNumber: state.pageNumber++ };
    case "update-api":
      let description = action.description;
      let location = action.location;
      let newUrl = `https://jobs.github.com/positions.json?description=${description}&location=${location}&`;
      return { ...state, pageNumber: 1, url: newUrl };
    default:
  }
};

const App = () => {
  const [jobData, setJobData] = useState([]);
  const [formInputs, dispatchInputs] = useReducer(formInputsReducer, inputs);
  const [api, dispatchApi] = useReducer(apiReducer, apiDetails);

  useEffect(() => {
    getPostings();
  }, [api]);

  const getPostings = () => {
    const apiUrl = api.url + `page=${api.pageNumber}`;
    const fetchData = async () => {
      const result = await axios(apiUrl);

      // appends result to jobData
      let newJobData = [...jobData, result];

      setJobData(newJobData);
    };

    fetchData();
  };

  const handleFormSubmit = (event) => {
    // when user enters info, this resets the jobData array
    setJobData([]);

    dispatchApi({
      type: "update-api",
      description: formInputs.description,
      location: formInputs.location,
    });
    event.preventDefault();
  };

  return (
    <div>
      <Wave />
      <GithubIcon />
      <div className="main-container">
        <Header />
        <Form
          formInputs={formInputs}
          handleFormSubmit={handleFormSubmit}
          dispatchInputs={dispatchInputs}
        />

        <DisplayJobListings jobData={jobData} />

        <ShowMore dispatchApi={dispatchApi} />
      </div>
    </div>
  );
};

export default App;
