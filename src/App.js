import React, { useCallback, useState, useEffect } from 'react';
import { PostsList, CreatePostForm } from "./components/posts";
import { getPosts, LAST_POST_ID } from "./libs/api/posts";
import { getStoredPosts, storePosts } from "./libs/storageUtils";

function App() {
  const [posts, setPosts] = useState(getStoredPosts());

  useEffect(() => {
    if (!posts.length) {
      const init = async () => {
        try {
          const response = await getPosts();
          setPosts(response);
          storePosts(posts);
        } catch (ignored) {}
      };

      init();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onItemRemove = useCallback((postId) => {
    const filtered = posts.filter(({ id }) => id !== postId);

    setPosts(filtered);
    storePosts(filtered);
  }, [posts]);

  const addNewPost = useCallback((values) => {
    const lastItemId = posts.reduce((accum, post) => post.id > accum ? post.id : accum, LAST_POST_ID);
    const updatedPosts = [...posts, { id: lastItemId + 1, ...values }];

    setPosts(updatedPosts);
    storePosts(updatedPosts);
  }, [posts]);

  return (
    <div className="container">
      <PostsList
        posts={posts}
        onItemRemove={onItemRemove}
      />
      <CreatePostForm onSuccess={addNewPost} />
    </div>
  );
}

export default App;
