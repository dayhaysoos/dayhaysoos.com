/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import { Link } from "gatsby"

const PostsList = ({ data, ...restProps }) => {
  return (
    <Box
      as="ul"
      sx={{
        mx: "-1.5rem",
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
          px: "1.5rem",
          ".title-holder": {
            position: "relative",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            py: 3,
            pr: "1.5rem",
            boxShadow: "inset 0 -1px 0 0 #F2F2F2",
            ":before": {
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              m: "auto",
              width: 0,
              height: 0,
              borderStyle: "solid",
              borderWidth: "5px 0 5px 10px",
              borderColor: theme =>
                `transparent transparent transparent ${theme.colors.primary}`,
            },
          },
          ":hover": {
            background: "white",
            boxShadow:
              "0 2px 23px 0 rgba(0,0,0,0.05), 0 8px 20px 0 rgba(0,0,0,0.02), 0 12px 74px 0 rgba(0,0,0,0.06)",
            color: "primary",
            textDecoration: "none",
            ".title-holder": {
              boxShadow: "none",
              ":before": {
                content: '""',
              },
            },
          },
        },
      }}
      {...restProps}
    >
      {data.map(item => {
        return (
          <li key={item.id}>
            <Link to={item.slug}>
              <div className="title-holder">{item.title}</div>
            </Link>
          </li>
        )
      })}
    </Box>
  )
}

export default PostsList
