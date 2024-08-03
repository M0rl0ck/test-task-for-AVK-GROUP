import { IPost } from "@/types/IPost";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface IPostProps {
  post: IPost;
}

const Post = ({ post }: IPostProps) => {
  return (
    <Card sx={{ width: "100%", minHeight: 100 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          {post.title}
        </Typography>
        <Typography variant="body1" component="p">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => console.log(post.id)}>
          Подробнее
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
