// export { default } from "../gatsby-theme-ui-blog/layout"

/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import "../fonts/fonts.css"

export default ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
            flex: "1 1 auto",
          }}
        >
          {children}
        </main>
        <Footer />
      </div>
    </Styled.root>
  )
}
