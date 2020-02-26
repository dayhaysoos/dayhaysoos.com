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
        Nick is a Software Engineer with experience working across multiple
        industries such as cybersecurity, finance, e-commerce, and education.
        Most recently, Nick joined Resilient Coders to help close the
        opportunity gap for aspiring Black and Latinx engineers in tech. He also
        teaches React and JavaScript at General Assembly and is a new instructor
        at Egghead.io. On his free time, he manages a mobile app called T7
        Chicken Plus, a tool that helps over 30,000 competitive Tekken players
        stay in touch with information about the characters. His favorite
        technologies are React Native and Gatsby, which, he uses to build
        e-commerce themes that leverage Stripe's Checkout experience.
      </Box>
    </Container>
  </Layout>
)

export default IndexPage
