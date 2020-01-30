// export { default } from "../components/layout"

import React from "react"
import { Link } from "gatsby"
import Head from "./head"
import "../fonts/fonts.css"

export default props => {
  return (
    <>
      <Head {...props} />
      {props.children}
    </>
  )
}
