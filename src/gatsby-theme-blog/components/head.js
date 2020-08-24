import React from "react"
import { Helmet } from "react-helmet"

export default ({ lang = "en-us", title, excerpt, ...props }) => (
  <Helmet
    {...props}
    htmlAttributes={{
      lang,
    }}
  >
    {title && <title>{title}</title>}
  </Helmet>
)
