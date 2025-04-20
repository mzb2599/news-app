import Card from "./Card";
import React, { useEffect, useState } from "react";
import "../css/Main.css";
import CircularProgress from "@mui/material/CircularProgress";

const Main = ({ newsData, setNewsData }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const API_URL =
        "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=JR9XguLDYqzlGZ2KLieJK8MCo6hjplhF";
      //process.env.REACT_APP_API_URL;
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
    <div className="main">
      <h1>News Articles</h1>
      {loading && <CircularProgress />}
      {!loading && newsData && newsData?.length === 0 && (
        <div className="no-data">No data available</div>
      )}
      {!loading && newsData && newsData?.length > 0 && (
        <div className="news-articles">
          {newsData.map((article) => (
            <div key={article.url}>
              <Card article={article} />
            </div>
          ))}
        </div>
      )}
      {!loading && newsData && newsData?.length === 0 && (
        <div className="no-data">No data available</div>
      )}
      {!loading && newsData && newsData?.length > 0 && (
        <div className="news-articles">
          {newsData.map((article) => (
            <div>
              <Card article={article} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
