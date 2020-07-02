import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`;

const BlogInfo = styled.p`
  color: black;
`;

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Justin's Thoughts</h1>
      <h4>{ data.allMarkdownRemark.totalCount } Posts</h4>
      {
        data.allMarkdownRemark.edges.map(({ node }) => 
          <BlogLink to={node.fields.slug}>
            <BlogTitle>{ node.frontmatter.title } - { node.frontmatter.date }</BlogTitle>
            <BlogInfo>{ node.excerpt }</BlogInfo>
          </BlogLink>
        )
      }
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order:DESC }) {
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
      totalCount
    }
  }
`;