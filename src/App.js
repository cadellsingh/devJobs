import "./App.css";
import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import Header from "./Header";
import Form from "./Form";
import DisplayJobListings from "./DisplayJobListings";
import Wave from "./Wave";
import GithubIcon from "./GithubIcon";
import { lightTheme, darkTheme } from "./Themes";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./DarkMode";
import styled from "styled-components";
import NoResults from "./NoResults";

const ContentContainer = styled.div`
  width: 75%;
  margin: 0 auto;

  @media (min-width: 1500px) {
    width: 60%;
  }

  @media (max-width: 900px) {
    width: 80%;
  }
`;

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
  const [theme, setTheme] = useDarkMode();
  const [jobData, setJobData] = useState([]);
  const [formInputs, dispatchInputs] = useReducer(formInputsReducer, inputs);
  const [api, dispatchApi] = useReducer(apiReducer, apiDetails);
  const [noResults, setNoResults] = useState(false);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // calculates the end of page, when end of page is reached... get more job postings
  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    dispatchApi({ type: "show-more" });
  }

  useEffect(() => {
    getPostings();
  }, [api]);

  const getPostings = () => {
    // const cors = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = api.url + `page=${api.pageNumber}`;
    const fetchData = async () => {
      const result = await axios(apiUrl);
      const { data } = result;

      if (data.length > 0) {
        // appends result to jobData
        let newJobData = [...jobData, result];

        setJobData(newJobData);
        setNoResults(false);
      } else {
        setNoResults(true);
      }
    };

    fetchData();
  };

  const handleFormSubmit = (event) => {
    let location = formInputs.location.trim();
    let description = formInputs.description.trim();

    setJobData([]);

    if (location !== "" || description !== "") {
      dispatchApi({
        type: "update-api",
        description: description,
        location: location,
      });
    }
    event.preventDefault();
  };

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div>
          <Wave />
          <GithubIcon />
          <ContentContainer>
            <Header theme={theme} themeToggler={themeToggler} />
            <Form
              formInputs={formInputs}
              handleFormSubmit={handleFormSubmit}
              dispatchInputs={dispatchInputs}
            />

            {noResults ? (
              <NoResults />
            ) : (
              <DisplayJobListings jobData={jobData} />
            )}
          </ContentContainer>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
