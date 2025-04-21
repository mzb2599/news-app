import { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/Main";
import "@testing-library/jest-dom";

const App = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const api_key = process.env.REACT_APP_API_KEY;
      const API_URL =
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${api_key}`;
      console.log(API_URL);

      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setNewsData(data.results);
        console.log(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [setNewsData]);

  return (
    <div className="App">
      <Main newsData={newsData} loading={loading}/>
    </div>
  );
};

export default App;
