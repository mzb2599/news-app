import Card from "./Card";
import "../css/Main.css";
import CircularProgress from "@mui/material/CircularProgress";

const Main = ({ newsData, loading = false }) => {
  return (
    <div className="main">
      <h1>Most Viewed Articles</h1>
      {loading && <CircularProgress data-testid="loading-spinner"/>}
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
