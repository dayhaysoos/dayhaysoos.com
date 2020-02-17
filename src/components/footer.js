/** @jsx jsx */
import { jsx, Flex, Container } from "theme-ui"
import Link from "./link"

import slashes from "../images/slashes.svg"

const Footer = () => (
  <Container
    sx={{
      width: "100%",
      flexDirection: ["column", "row"],
      justifyContent: "space-between",
      alignItems: "center",
      mt: 4,
      mb: [4, 4, 5, 6],
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
        mt: [4, 0],
      }}
    >
      <Link
        to="https://github.com/dayhaysoos"
        sx={{
          variant: "links.regular",
          fontSize: [1, 2],
          fontWeight: "semibold",
        }}
      >
        GitHub
      </Link>
      <Link
        to="https://twitter.com/dayhaysoos"
        sx={{
          variant: "links.regular",
          fontSize: [1, 2],
          fontWeight: "semibold",
          ml: [0, 5],
        }}
      >
        Twitter
      </Link>
      <Link
        to="#"
        sx={{
          variant: "links.regular",
          fontSize: [1, 2],
          fontWeight: "semibold",
          ml: [0, 4, 5],
        }}
      >
        Email Me
      </Link>
    </Flex>
  </Container>
)

export default Footer
