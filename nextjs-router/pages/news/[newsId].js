import { useRouter } from "next/router";
const NewsDetailPage = (obj) => {
  const router = useRouter();
  console.log("Router: ", router.query.newsId);
  return (
    <>
      <h1>NewsDetailPage works!</h1>
      <pre>{JSON.stringify(obj)}</pre>
    </>
  );
};

export default NewsDetailPage;
