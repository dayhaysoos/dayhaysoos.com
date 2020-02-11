/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { alpha } from "@theme-ui/color"
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
          color: alpha("text", 0.7),
          ":hover": {
            textDecoration: "none",
            color: "primary",
            opacity: 1,
          },
          "&.active": {
            color: "primary",
            fontWeight: "semibold",
          },
        }}
        activeClassName="active"
      >
        About
      </Link>
      <Link
        to="#get-free-previews"
        sx={{
          variant: "links.regular",
          fontSize: [1, 2],

          color: alpha("text", 0.7),
          ":hover": {
            textDecoration: "none",
            color: "primary",
            opacity: 1,
          },
          "&.active": {
            color: "primary",
            fontWeight: "semibold",
          },
          ml: [3, 4],
        }}
      >
        Subscribe
      </Link>
    </Flex>
  </Flex>
)

export default Header
