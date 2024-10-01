import { getBlogItems } from "@/app/blog/utils";
import { Box } from "@mui/material/";
import BlogPost from "@/app/components/BlogPost";

export function BlogItems() {
  const allPosts = getBlogItems();

  return (
    <Box
      sx={{
        columns: "6 200px",
        gap: 2,
        px: 2
      }}
    >
      {allPosts.map(
        ({ metadata: { title, publishedAt, summary }, slug }) => (
          <BlogPost key={slug} title={title} publishedAt={publishedAt} slug={slug} summary={summary} />
        )
      )}
    </Box>
  );
}
