"use client";

import { useRouter } from "next/navigation";
import { IPost } from "@/types/IPost";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

interface IDetailedPost {
  post: IPost;
}
export default function DetailedPost({ post }: IDetailedPost) {
  const route = useRouter();
  return (
    <Card sx={{ width: "100%", minHeight: 100 }}>
      <CardMedia
        component={"img"}
        sx={{ width: 400, margin: "0 auto" }}
        src={`https://via.assets.so/furniture.png?id=${post.id}&q=95&w=360&h=360&fit=fill`}
        alt="furniture"
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="h3">
          {post.title}
        </Typography>
        <Typography variant="body1" fontSize={22} component="p">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" variant="contained" onClick={() => route.back()}>
          Назад
        </Button>
      </CardActions>
    </Card>
  );
}
