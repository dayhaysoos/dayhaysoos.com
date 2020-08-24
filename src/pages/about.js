/**@jsx jsx */
import { jsx, Container, Box, Heading } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <Container>
      <Heading sx={{ marginBottom: 20 }}>About Me</Heading>
      <Box>
        Nick is a Software Engineer at{" "}
        <a href="https://echobind.com">Echobind</a> with experience working
        across multiple industries such as cybersecurity, finance, e-commerce,
        and education. In his last role, he joined Resilient Coders to help
        close the opportunity gap for aspiring Black and Latinx engineers in
        tech. He also is an instructor at{" "}
        <a href="https://egghead.io">egghead.io</a>. On his free time, he
        manages a mobile app called T7 Chicken Plus, a tool that helps over
        30,000 competitive Tekken players stay in touch with information about
        the characters and is a maintainer of a Stripe powered shopping cart
        library, <a href="https://useshoppingcart.com">use-shopping-cart</a>.
        His favorite technologies are React Native and anything Jamstack
        related, which, he uses to build e-commerce themes that leverage
        Stripe's Checkout experience.
      </Box>
    </Container>
  </Layout>
)

export default IndexPage
