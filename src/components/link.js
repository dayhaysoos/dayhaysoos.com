import React from "react"
import { Link } from "gatsby"

export default ({ children, to, ...restProps }) => {
  const internal = /^\/(?!\/)/.test(to)

  if (internal) {
    return (
      <Link to={to} {...restProps}>
        {children}
      </Link>
    )
  }

  return (
    <a href={to} {...restProps}>
      {children}
    </a>
  )
}
