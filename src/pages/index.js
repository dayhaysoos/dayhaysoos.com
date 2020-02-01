/** @jsx jsx */
import { jsx, Flex, Container, Heading } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostsList from "../components/postsList"
import portrait from "../images/nick.jpg"
import slashes from "../images/slashes.svg"

const IndexPage = () => {
  const allPosts = useStaticQuery(graphql`
    query AllPostsQuery {
      allBlogPost(limit: 3, sort: { fields: date, order: DESC }) {
        nodes {
          title
          slug
          id
          date
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <div
        sx={{
          maxWidth: "1360px",
          mx: "auto",
          backgroundImage: `url("${portrait}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "400px auto",
          backgroundPosition: "calc(100% + 80px) top",
          minHeight: "510px",
          "@media (min-width: 640px)": {
            backgroundSize: "300px auto",
            backgroundPosition: "right top",
            minHeight: "325px",
          },
          "@media (min-width: 768px)": {
            backgroundSize: "350px auto",
            minHeight: "325px",
          },
          "@media (min-width: 992px)": {
            backgroundSize: "450px auto",
            minHeight: "415px",
          },
          "@media (min-width: 1280px)": {
            backgroundSize: "500px auto",
            minHeight: "460px",
          },
        }}
      >
        <Container>
          <Heading
            as="h2"
            sx={{
              fontSize: "22px",
              letterSpacing: "-0.5px",
              paddingTop: "250px",
              maxWidth: "350px",
              "@media (min-width: 640px)": {
                fontSize: "24px",
                paddingTop: "40px",
                maxWidth: "100%",
              },
              "@media (min-width: 768px)": {
                fontSize: "30px",
                letterSpacing: "-0.75px",
                paddingTop: "40px",
              },
              "@media (min-width: 992px)": {
                fontSize: "42px",
                letterSpacing: "-1px",
              },
              "@media (min-width: 1280px)": {
                fontSize: "48px",
                letterSpacing: "-1.25px",
              },
            }}
          >
            Nick — A Developer from Boston
            <br sx={{ display: ["none", "block"] }} /> teaching React, React
            Native <br sx={{ display: ["none", "block"] }} /> and JAMstack.
            Author of the <br sx={{ display: ["none", "block"] }} /> premier
            Tekken frame data app.
          </Heading>
          <Link
            to="/"
            sx={{
              mt: [4, 5],
              textTransform: "capitalize",
              display: "block",
              fontWeight: "semibold",
              color: "text",
            }}
          >
            read full bio
          </Link>
        </Container>
      </div>
      <Container>
        <Flex
          sx={{
            textTransform: "uppercase",
            alignItems: "center",
            fontSize: 1,
            fontWeight: "semibold",
          }}
        >
          <img
            src={slashes}
            alt="slashes"
            sx={{
              mr: 2,
              display: "block",
              height: "14px",
            }}
          />
          from the blog
        </Flex>
        <PostsList
          data={allPosts.allBlogPost.nodes}
          sx={{
            mt: 4,
            listStyle: "none",
            p: 0,
          }}
        />
      </Container>
    </Layout>
  )
}

export default IndexPage
