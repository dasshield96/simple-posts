import React from 'react';
import PropTypes from 'prop-types';
import PostItem from "./PostItem";

function PostsList({ posts = [], onItemRemove }) {
  return (
    <div className="posts-list well">
      {posts.map((post) => (
        <PostItem
          key={post.id}
          id={post.id}
          heading={post.title}
          content={post.body}
          tags={post.tags}
          onRemove={onItemRemove}
        />
      ))}
    </div>
  )
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
  onItemRemove: PropTypes.func.isRequired,
};

export default PostsList;
