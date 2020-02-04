/** @jsx jsx */
import { jsx, Heading } from "theme-ui"

const SlashedTitle = ({ title, ...restProps }) => (
  <Heading
    as="h4"
    sx={{
      display: "flex",
      alignItems: "center",
      textTransform: "uppercase",
      fontSize: ["13px", "15px"],
      fontWeight: "bold",
      fontFamily: "monospace",
      color: "text",
    }}
    {...restProps}
  >
    <span
      sx={{
        letterSpacing: "-2.88px",
        opacity: 0.5,
        mr: 2,
      }}
    >
      {`//`}
    </span>
    {title}
  </Heading>
)

export default SlashedTitle
