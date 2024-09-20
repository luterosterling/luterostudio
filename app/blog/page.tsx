import { BlogPosts } from "@/app/components/BlogPosts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section>
      <h1>My Blog</h1>
      <BlogPosts />
    </section>
  );
}
