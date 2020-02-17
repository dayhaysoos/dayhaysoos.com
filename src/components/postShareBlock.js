/** @jsx jsx */
import { jsx, Container, Heading, Flex } from "theme-ui"
import Link from "./link"
import nickColor from "../images/nick-color.png"
import iconTwitter from "../images/icon-twitter.svg"
import iconEdit from "../images/icon-wrench.svg"
import iconRss from "../images/icon-rss.svg"
import slashes from "../images/slashes.svg"

export default () => {
  return (
    <div
      sx={{
        mt: [4, 4, 5, 6],
      }}
    >
      <Container>
        <Flex
          sx={{
            alignItems: "center",
            flexDirection: ["column", "column", "row"],
          }}
        >
          <div
            sx={{
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              border: "1px solid",
              borderColor: "gray",
              flexShrink: 0,
              overflow: "hidden",
            }}
          >
            <img
              src={nickColor}
              alt="Nick Dejesus"
              sx={{ width: "100%", display: "block" }}
            />
          </div>
          <Heading
            as="h3"
            sx={{
              fontSize: [3, 3, 4, "30px"],
              ml: [0, 0, 4, "40px"],
              mt: [3, 3, 0],
              textAlign: ["center", "center", "left"],
            }}
          >
            Hi, I’m Nick, a developer from Boston.
            <br />
            I’m the author of this blog, nice to meet you!
          </Heading>
        </Flex>
        <Flex
          sx={{
            mt: 5,
            justifyContent: "space-between",
          }}
        >
          <ul
            sx={{
              width: ["100%", "100%", "70%", "60%"],
              m: 0,
              p: 0,
              listStyle: "none",
              li: {
                py: "10px",
                ":not(:first-of-type)": {
                  borderTop: "1px solid",
                  borderColor: "gray",
                },
              },
              a: {
                display: "inline-flex",
                alignItems: "center",
                fontWeight: "semibold",
                fontSize: ["15px", "15px", 2],
              },
            }}
          >
            <li>
              <Link to="#" sx={{ variant: "links.regular" }}>
                <img
                  src={iconTwitter}
                  alt="Share this article with your friends on Twitter"
                />
                <span sx={{ ml: 3 }}>
                  Share this article with your friends on Twitter
                </span>
              </Link>
            </li>
            <li>
              <Link to="#" sx={{ variant: "links.regular" }}>
                <img src={iconEdit} alt="Edit this article on github" />
                <span sx={{ ml: 3 }}>Edit this article on github</span>
              </Link>
            </li>
            <li>
              <Link to="#" sx={{ variant: "links.regular" }}>
                <img src={iconRss} alt="RSS Feed" />
                <span sx={{ ml: 3 }}>RSS Feed</span>
              </Link>
            </li>
          </ul>
          <img
            src={slashes}
            alt="slashes"
            sx={{
              display: ["none", "none", "block"],
            }}
          />
        </Flex>
      </Container>
    </div>
  )
}
