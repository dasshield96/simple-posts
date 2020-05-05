/**
 * Used for manipulations with localStorage
 */

const POSTS_KEY = "_posts";

export function storePosts(posts) {
  localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
}

export function getStoredPosts() {
  return JSON.parse(localStorage.getItem(POSTS_KEY)) || [];
}
