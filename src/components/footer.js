/** @jsx jsx */
import { jsx, Flex, Container } from "theme-ui"
import { Link } from "gatsby"

import slashes from "../images/slashes.svg"

const Footer = () => (
  <Container
    sx={{
      width: "100%",
      flexDirection: ["column", "row"],
      justifyContent: "space-between",
      alignItems: "center",
      mt: [4, 5],
      mb: 4,
    }}
    as={Flex}
  >
    <img
      src={slashes}
      alt="Nick Dejesus"
      title="Nick Dejesus"
      sx={{
        width: ["50px", "auto"],
      }}
    />
    <Flex
      sx={{
        justifyContent: ["space-around", "self-start"],
        width: ["100%", "auto"],
        mt: [5, 0],
      }}
    >
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
        sx={{
          fontWeight: "semibold",
          ml: [0, 5],
        }}
      >
        Twitter
      </Link>
      <Link
        to="/about"
        sx={{
          fontWeight: "semibold",
          ml: [0, 5],
        }}
      >
        Email Me
      </Link>
    </Flex>
  </Container>
)

export default Footer
