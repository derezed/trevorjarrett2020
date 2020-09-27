import React from "react";
import Layout from "../globals/Layout";
import SEO from "../globals/SEO";
import { graphql } from "gatsby";
import PostLink from "../components/post-link"

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <SEO title="Blog | Trevor Jarrett " />

      <div className="w-full heading relative mr-5mb-2">
        <h2 className="text-2xl inline mr-5 font-bold">Blog</h2>
      </div>
      <p>This blog is mostly for me to document things I've learned, what I'm working on, or something else.</p>
      <p>It should be noted that these opinions are my own and do not reflect those of my employer.</p>

      <div className="blog-list">
        {Posts}
      </div>
    </Layout>
  )
}
export default Blog

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
