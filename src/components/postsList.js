/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import { Link } from "gatsby"

const PostsList = ({ data, ...restProps }) => {
  return (
    <Box
      as="ul"
      {...restProps}
      sx={{
        mx: "-2rem",
        mt: 4,
        listStyle: "none",
        p: 0,
        "li:not(:first-of-type)": {
          marginTop: "-1px",
        },
        "li:last-of-type": {
          a: {
            div: {
              boxShadow: "none",
            },
          },
        },
        a: {
          display: "block",
          fontSize: "30px",
          fontWeight: "bold",
          color: "text",
          px: 4,
          ":hover": {
            background: "white",
            boxShadow:
              "0 2px 23px 0 rgba(0,0,0,0.05), 0 8px 20px 0 rgba(0,0,0,0.02), 0 12px 74px 0 rgba(0,0,0,0.06)",
            color: "primary",
            textDecoration: "none",
            div: {
              boxShadow: "none",
            },
          },
          div: {
            py: 3,
            boxShadow: "inset 0 -1px 0 0 #F2F2F2",
          },
        },
      }}
    >
      {data.map(item => (
        <li key={item.id}>
          <Link to={item.slug}>
            <div>{item.title}</div>
          </Link>
        </li>
      ))}
    </Box>
  )
}

export default PostsList
