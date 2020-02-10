// export { default } from "../gatsby-theme-ui-blog/layout"

/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui"
import { alpha } from "@theme-ui/color"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import SubscribeForm from "./subscribeForm"

import "../fonts/fonts.css"

export default ({ subscribeForm = true, children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <Styled.root>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header />
        <main
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          {children}
        </main>
        {subscribeForm && (
          <section
            sx={{
              pt: [4, 5, 6],
              mt: [4, 5, 6],
              borderTop: "1px solid",
              borderColor: alpha("text", 0.1),
            }}
          >
            <Container>
              <SubscribeForm />
            </Container>
          </section>
        )}
        <Footer />
      </div>
    </Styled.root>
  )
}
