"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "@/utils/queries";
import Post from "./Post";

interface SinglePost {
  id: string;
  author: {
    __typename: string;
    name: string;
  };
  title: string;
  content: string;
}

interface Posts {
  posts: SinglePost[];
}

const PostsList = () => {
  const { data } = useQuery<Posts>(GET_POSTS);
  const posts = data?.posts;

  if (!posts) {
    return null;
  }
  console.log(posts);
  return (
    <div className="flex-col justify-center w-1/2 space-y-10">
      {posts.map((post) => (
        <Post key={post.id} author={post.author.name} content={post.content} />
      ))}
    </div>
  );
};

export default PostsList;
