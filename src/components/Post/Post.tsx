import { IPost } from "@/types/IPost";
import React from "react";
import { useRouter } from "next/navigation";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface IPostProps {
  post: IPost;
}

const Post = ({ post }: IPostProps) => {
  const router = useRouter();
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
        <Button size="small" onClick={() => router.push(`/${post.id}`)}>
          Подробнее
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
