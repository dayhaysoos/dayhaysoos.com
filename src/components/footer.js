/** @jsx jsx */
import { jsx, Flex, Container } from "theme-ui"
import { Link } from "gatsby"

import slashes from "../images/slashes.svg"

const Footer = () => (
  <Container
    sx={{
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      mt: [4, 5],
      mb: 4,
    }}
    as={Flex}
  >
    <img src={slashes} alt="Nick Dejesus" title="Nick Dejesus" />
    <Flex>
      <Link
        to="/about"
        sx={{
          fontWeight: "semibold",
        }}
      >
        GitHub
      </Link>
      <Link
        to="/about"
        style={{
          textDecoration: `none`,
        }}
      >
        Twitter
      </Link>
      <Link
        to="/about"
        style={{
          textDecoration: `none`,
        }}
      >
        Email Me
      </Link>
    </Flex>
  </Container>
)

export default Footer
