/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Layout from "../components/layout"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default ({
  date,
  excerpt,
  children,
  keywords,
  tags,
  data: {
    post,
    // site: { siteMetadata: title },
  },
  location,
  previous,
  next,
  ...props
}) => {
  return (
    <Styled.root>
      <MDXProvider>
        <Layout title={post.title} excerpt={post.excerpt} {...props}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </Layout>
      </MDXProvider>
    </Styled.root>
  )
}
