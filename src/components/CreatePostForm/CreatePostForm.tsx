import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useCreatePost } from "@/API/Hooks/useCreatePost";
import { useRouter } from "next/navigation";
import Card from "@mui/material/Card";

const CreatePostForm = () => {
  const router = useRouter();
  const { mutate } = useCreatePost();
  const [title, setTitle] = useState<string>("");
  const [errorTitle, setErrorTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [errorBody, setErrorBody] = useState<string>("");
  const [userId, setUserId] = useState<number | undefined>(undefined);
  const [errorUserId, setErrorUserId] = useState<string>("");

  const handleSubmit = () => {
    if (title && body && userId) {
      setErrorTitle("");
      setErrorBody("");
      setErrorUserId("");
      const post = {
        title,
        body,
        userId,
      };
      mutate(post, {
        onSuccess: (data) => {
          router.push(`/${data.id}`);
        },
      });
    } else {
      setErrorTitle(!title ? "Поле не может быть пустым" : "");
      setErrorBody(!body ? "Поле не может быть пустым" : "");
      setErrorUserId(!userId ? "Поле не может быть пустым" : "");
    }
  };

  return (
    <Card
      sx={{ p: 3, mt: 5, display: "flex", flexDirection: "column", gap: 3 }}
    >
      <Typography variant="h3" component="h3">
        Добавить пост
      </Typography>
      <TextField
        id="userId"
        label="User ID"
        value={userId}
        onChange={(e) => {
          setUserId(Number(e.target.value));
          setErrorUserId("");
        }}
        variant="outlined"
        type="number"
        inputProps={{ min: 1 }}
        error={!!errorUserId}
        helperText={errorUserId}
      />
      <TextField
        id="title-post"
        label="Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setErrorTitle("");
        }}
        multiline
        maxRows={4}
        variant="outlined"
        error={!!errorTitle}
        helperText={errorTitle}
      />
      <TextField
        id="body-post"
        label="Message"
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
          setErrorBody("");
        }}
        multiline
        rows={4}
        variant="outlined"
        error={!!errorBody}
        helperText={errorBody}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Добавить пост
      </Button>
    </Card>
  );
};

export default CreatePostForm;
