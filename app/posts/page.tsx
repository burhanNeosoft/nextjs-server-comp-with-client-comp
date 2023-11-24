import PostLists from "./post-list";
import { Suspense } from "react";
const Posts = async () => {
  return (
    <>
      <div className="text-center">
        <h1>Post List</h1>
        <Suspense fallback={"loading....."}>
          <PostLists />
        </Suspense>
      </div>
    </>
  );
};

export default Posts;
