/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import { Link } from "gatsby"

const PostsList = ({ data, ...restProps }) => {
  return (
    <Box as="ul" {...restProps}>
      {data.map(item => (
        <li key={item.id}>
          <Link to={item.slug}>{item.title}</Link>
        </li>
      ))}
    </Box>
  )
}

export default PostsList
