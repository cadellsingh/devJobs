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
  title: "",
  location: "",
  fullTime: false,
};

const formInputsReducer = (state, action) => {
  const value = action.value;

  switch (action.type) {
    case "title":
      return { ...state, title: value };
    case "location":
      return { ...state, location: value };
    case "fulltime":
      return { ...state, fullTime: value };
  }
};

const App = () => {
  const [jobData, setJobData] = useState([]);
  const [showMore, setShowMore] = useState(1);
  const [formInputs, dispatchInputs] = useReducer(formInputsReducer, inputs);

  const handleShowMoreClick = () => {
    setShowMore(showMore + 1);
  };

  useEffect(() => {
    getPostings();
  }, [showMore]);

  const getPostings = () => {
    const apiUrl = `https://jobs.github.com/positions.json?page=${showMore}&search=code`;
    const fetchData = async () => {
      const result = await axios(apiUrl);

      let newJobData = [...jobData, result];

      setJobData(newJobData);
    };

    fetchData();
  };

  const handleFormSubmit = (event) => {
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

        <ShowMore handleOnClick={handleShowMoreClick} />
      </div>
    </div>
  );
};

export default App;
