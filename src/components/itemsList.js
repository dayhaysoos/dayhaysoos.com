/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import Link from "./link"

export default ({ data, ...restProps }) => {
  return (
    <Box
      as="ul"
      sx={{
        mx: [null, "-1.5rem"],
        listStyle: "none",
        p: 0,
        "li:not(:first-of-type)": {
          marginTop: [null, "-1px"],
        },
        "li:last-of-type": {
          a: {
            ".wrapper": {
              boxShadow: "none",
            },
          },
        },
        a: {
          display: "block",
          fontSize: [2, 4, "30px"],
          fontWeight: ["semibold", "bold"],
          color: "text",
          px: [null, "1.5rem"],
          "@media (hover: hover)": {
            ":hover": {
              background: "white",
              boxShadow:
                "0 2px 23px 0 rgba(0,0,0,0.05), 0 8px 20px 0 rgba(0,0,0,0.02), 0 12px 74px 0 rgba(0,0,0,0.06)",
              color: "primary",
              textDecoration: "none",
              ".wrapper": {
                boxShadow: "none",
                ":before": {
                  content: '""',
                },
              },
              ".category-holder": {
                opacity: 1,
                color: "primary",
              },
              ".icon": {
                fill: "primary",
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
            <Link to={item.slug || item.href}>
              <div
                className="wrapper"
                sx={{
                  py: 3,
                  boxShadow: "inset 0 -1px 0 0 #F2F2F2",
                }}
              >
                <div
                  className="title-holder"
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                    pr: [null, "1.5rem"],
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
                  }}
                >
                  {item.prepend && (
                    <div sx={{ mr: [2, 3], flexShrink: 0, display: "flex" }}>
                      {item.prepend}
                    </div>
                  )}
                  <div
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.title}
                  </div>
                </div>
                {item.category && (
                  <div
                    className="category-holder"
                    sx={{
                      mt: 1,
                      ml: ["28px", "36px"],
                      fontSize: ["11px", "13px"],
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      opacity: 0.5,
                      color: "text",
                    }}
                  >
                    {item.category}
                  </div>
                )}
              </div>
            </Link>
          </li>
        )
      })}
    </Box>
  )
}
