/** @jsx jsx */
import { jsx, Container, Heading } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Link from "../components/link"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostsList from "../components/postsList"
import SlashedTitle from "../components/slashedTitle"
import portrait from "../images/nick.jpg"
import iconPlay from "../images/icon-play.svg"

const IconPlay = () => (
  <img
    alt="play"
    src={iconPlay}
    sx={{
      display: "block",
      width: "22px",
    }}
  />
)

const freeEggheadResources = [
  {
    id: "javascript-filter-strings-with-the-filter-array-method-in-javascript",
    title: "Filter Strings with the Filter Array Method in JavaScript",
    href:
      "https://egghead.io/lessons/javascript-filter-strings-with-the-filter-array-method-in-javascript",
    prepend: <IconPlay />,
    category: "javascript",
  },
  {
    id:
      "javascript-filter-strings-with-the-filter-array-method-in-javascript-01",
    title: "Filter Strings with the Filter Array Method in JavaScript",
    href:
      "https://egghead.io/lessons/javascript-filter-strings-with-the-filter-array-method-in-javascript",
    prepend: <IconPlay />,
    category: "javascript",
  },
  {
    id:
      "javascript-filter-strings-with-the-filter-array-method-in-javascript-02",
    title: "Filter Strings with the Filter Array Method in JavaScript",
    href:
      "https://egghead.io/lessons/javascript-filter-strings-with-the-filter-array-method-in-javascript",
    prepend: <IconPlay />,
    category: "javascript",
  },
]

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
              pt: "250px",
              maxWidth: "350px",
              "@media (min-width: 640px)": {
                fontSize: "24px",
                pt: "40px",
                maxWidth: "100%",
              },
              "@media (min-width: 768px)": {
                fontSize: "30px",
                letterSpacing: "-0.75px",
                pt: "40px",
              },
              "@media (min-width: 992px)": {
                pt: 0,
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
            Author of the <br sx={{ display: ["none", "block"] }} /> premier{" "}
            <a href="/">Tekken frame data app.</a>
          </Heading>
          <Heading as="h4" sx={{ fontWeight: "semibold" }}>
            <Link
              to="/"
              sx={{
                mt: [4, 5],
                textTransform: "capitalize",
                display: "inline-block",
                fontWeight: "semibold",
                color: "red",
              }}
            >
              read full bio
            </Link>
          </Heading>
        </Container>
      </div>
      <Container>
        <section>
          <SlashedTitle title="from the blog" />
          <PostsList data={allPosts.allBlogPost.nodes} sx={{ mt: [3, 4] }} />
        </section>
        <section sx={{ mt: [4, 5, 6] }}>
          <SlashedTitle title="free egghead resources" />
          <PostsList data={freeEggheadResources} sx={{ mt: [3, 4] }} />
        </section>
      </Container>
    </Layout>
  )
}

export default IndexPage
