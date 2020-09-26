import React from "react";
import { Link } from "gatsby";

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.slug}>
      <h3 className="mb-2">{post.frontmatter.title}, <span className="text-base">{post.frontmatter.date}</span></h3>
      <p>{post.excerpt}</p>
    </Link>
  </div>
);

export default PostLink;
