import "./App.css";
import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import Header from "./Header";
import Form from "./Form";
import DisplayJobListings from "./DisplayJobListings";

const inputs = {
  title: "",
  location: "",
  fullTime: false,
};

const setFormInputs = (state, action) => {};

const App = () => {
  const [jobData, setJobData] = useState([]);
  const [formInputs, dispatchInputs] = useReducer(setFormInputs, inputs);

  useEffect(() => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl =
      "https://jobs.github.com/positions.json?description=python&location=new+york";
    const fetchData = async () => {
      const result = await axios(proxyUrl + apiUrl);

      setJobData(result);
    };

    fetchData();
    // so the empty array can be state variables
    // state variables will affect what the user wants to see
  }, []);

  // could show how many results were found

  console.log(jobData);

  const { data } = jobData;

  return (
    <div>
      <img className="wave" src="wave.svg" alt="" />
      <div className="main-container">
        <Header />
        <Form />
        <DisplayJobListings jobData={data} />
      </div>
    </div>
  );
};

// footer would be github icon at the bottom left

export default App;
