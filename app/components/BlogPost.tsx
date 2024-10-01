import { formatDate } from "@/app/blog/utils";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material/";
import Link from "next/link";

export default function BlogPost({
  title,
  slug,
  publishedAt,
  summary,
}: {
  title: string;
  slug: string;
  publishedAt: string;
  summary: string;
}) {
  const randomHeight = () => Math.floor(Math.random() * 300) + 200 + "px";

  return (
    <Card
      sx={{
        bgcolor: "background.paper",
        border: 1,
        width: "100%",
        color: "white",
        margin: "0 1rem 1rem 0",
        textAlign: "center",
        display: "inline-block",
        height: randomHeight(),
        borderRadius: 1,
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="h3"
          color="text.primary"
        >
          {title}
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          {summary}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {formatDate(publishedAt, false)}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={slug}>
          <Button variant="contained">See</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
