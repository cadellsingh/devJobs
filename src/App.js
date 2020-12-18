import "./App.css";
import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import Header from "./Header";
import Form from "./Form";
import DisplayJobListings from "./DisplayJobListings";
import ShowMore from "./ShowMore";
import Wave from "./Wave";
import GithubIcon from "./GithubIcon";
import CardsOrList from "./CardsOrList";

const inputs = {
  title: "",
  location: "",
  fullTime: false,
};

const dataFetchReducer = (state, action) => {};

const App = () => {
  const [jobData, setJobData] = useState([]);
  const [showMore, setShowMore] = useState(1);
  const [formInputs, dispatchInputs] = useReducer(dataFetchReducer, inputs);
  const [displayStyle, setDisplayStyle] = useState("list");

  const handleOnClick = (arg) => {
    arg === "card" ? setDisplayStyle("card") : setDisplayStyle("list");
  };

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

  return (
    <div>
      <Wave />
      <GithubIcon />
      <div className="main-container">
        <Header />
        <Form />

        <CardsOrList
          handleOnClick={handleOnClick}
          displayStyle={displayStyle}
        />

        <DisplayJobListings jobData={jobData} displayStyle={displayStyle} />

        <ShowMore handleOnClick={handleShowMoreClick} />
      </div>
    </div>
  );
};

export default App;
