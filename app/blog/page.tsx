import { BlogItems } from "@/app/components/BlogItems";
import Header from "@/app/components/Header";
import { Box } from "@mui/material";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <>
      <Header />
      <Box component="main">  
        <BlogItems />
      </Box>
    </>
  );
}
