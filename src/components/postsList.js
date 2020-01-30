/** @jsx jsx */
import { jsx, Box } from "theme-ui"

const PostsList = ({ data, ...restProps }) => {
  return (
    <Box as="ul" {...restProps}>
      {data.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </Box>
  )
}

export default PostsList
