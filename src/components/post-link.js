import React from "react";
import { Link } from "gatsby";

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.slug}>
      <div className="w-full heading relative mr-5 mt-8 mb-2">
        <h3 className="mb-2 mr-5 inline font-bold">{post.frontmatter.title}, <span className="text-base font-normal">{post.frontmatter.date}</span></h3>
      </div>
      <p>{post.excerpt}</p>
    </Link>
  </div>
);

export default PostLink;
