/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import Link from "./link"

import logo from "../images/logo.svg"

const Header = () => (
  <Flex
    sx={{
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      px: [3, 4],
      py: [3, 4],
    }}
    as="header"
  >
    <Link to="/">
      <img
        src={logo}
        alt="Nick Dejesus"
        title="Nick Dejesus"
        sx={{ display: "block", width: ["110px", "130px"] }}
      />
    </Link>
    <Flex>
      <Link
        to="/about"
        sx={{
          variant: "links.regular",
          fontSize: [1, 2],
          fontWeight: "semibold",
          color: "text",
          opacity: 0.7,
          ":hover": {
            textDecoration: "none",
            color: "primary",
            opacity: 1,
          },
        }}
      >
        About
      </Link>
      <button
        type="button"
        onClick={console.log("scroll to subscribe")}
        sx={{
          ml: [3, 4],
          background: "none",
          boxShadow: "none",
          border: "none",
          fontSize: [1, 2],
          fontWeight: "semibold",
          p: 0,
          color: "text",
          opacity: 0.7,
          cursor: "pointer",
          ":hover": {
            opacity: 1,
            color: "primary",
          },
        }}
      >
        Subscribe
      </button>
    </Flex>
  </Flex>
)

export default Header
