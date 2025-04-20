import React from "react";

const NewsDetails = ({ article }) => {
  return (
    <div className="news-details">
      <h1>{article.title}</h1>
      <img
        src={article?.media[0] && article?.media[0]["media-metadata"][2]?.url}
        alt={article.title}
      />
      <p>{article.abstract}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  );
};
