/** @jsx jsx */
import { jsx, Flex, Container } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostsList from "../components/postsList"

const IndexPage = () => {
  const allPosts = useStaticQuery(graphql`
    query AllPostsQuery {
      allBlogPost {
        nodes {
          title
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <h1>Index page</h1>
        <p>some text</p>
        <a href="#">some link</a>
        <PostsList
          data={allPosts.allBlogPost.nodes}
          sx={{
            mt: 5,
          }}
        />
      </Container>
    </Layout>
  )
}

export default IndexPage
