import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const MediaCard = ({ article }) => {
  return (
    <Card sx={{ maxWidth: 345, padding: "10px", border: "1px solid #ccc" }}>
      <CardMedia
        sx={{ height: 180 }}
        image={article?.media[0] && article?.media[0]["media-metadata"][2]?.url}
        title={article.title}
        alt={article.title}
      />
      <CardContent sx={{ height: 180 }}>
        <Typography gutterBottom variant="h5" component="div">
          {article.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {article.abstract.length > 150
            ? article.abstract.slice(0, 100) + "..."
            : article.abstract}
          {
            <Button
              size="small"
              onClick={() => window.open(article.url, "_blank")}
            >
              Read More
            </Button>
          }
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MediaCard;
