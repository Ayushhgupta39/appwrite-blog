import React, { useEffect } from "react";
import dbService from "../services/database";
import { Container, PostCard } from "../components";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    dbService
      .getAllPosts([])
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPosts;
