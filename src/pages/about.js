import React from "react"
import { Link } from "gatsby"

import { Container } from "@theme-ui/components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <Container>about page</Container>
  </Layout>
)

export default IndexPage
