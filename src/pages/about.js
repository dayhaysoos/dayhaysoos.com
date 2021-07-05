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
        Nick is a Software Engineer at Prismic on the Developer Experience team, focused on NextJS. As the open source maintainer of use-shopping-cart, a Stripe powered shopping cart library, he's always thinking of ways to solve problems in the e-commerce space. 
        
        His favorite technologies to work with are anything on the Jamstack, as well as React Native. He has a passion for teaching and developer tooling. Outside of work, he is a competitive gamer, participating in Tekken tournaments around the world.
      </Box>
    </Container>
  </Layout>
)

export default IndexPage
