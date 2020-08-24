/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { Link } from "gatsby"

const PostLink = ({ title, slug, excerpt }) => (
  <article>
    <header>
      <h2
        sx={{
          mb: 1,
        }}
      >
        <Link
          sx={{
            textDecoration: `none`,
          }}
          to={slug}
        >
          {title || slug}
        </Link>
      </h2>
    </header>
    <section>
      <Styled.p>{excerpt}</Styled.p>
    </section>
  </article>
)

export default PostLink
