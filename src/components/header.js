/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { Link } from "gatsby"

import logo from "../images/logo.svg"

const Header = () => (
  <Flex
    sx={{
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      px: [2, 3, 4],
      py: [3, 4],
    }}
    as="header"
  >
    <Link
      to="/"
      style={{
        textDecoration: `none`,
      }}
    >
      <img src={logo} alt="Nick Dejesus" title="Nick Dejesus" />
    </Link>
    <Flex>
      <Link
        to="/about"
        style={{
          textDecoration: `none`,
        }}
      >
        About
      </Link>
    </Flex>
  </Flex>
)

export default Header
