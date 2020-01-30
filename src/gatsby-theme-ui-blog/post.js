/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Layout } from "gatsby-theme-ui-layout"

export default ({
  title,
  date,
  excerpt,
  children,
  keywords,
  tags,
  ...props
}) => {
  return (
    <Styled.root>
      <Layout title={title} excerpt={excerpt} {...props}>
        <Styled.h1>{title}</Styled.h1>
        {children}
      </Layout>
    </Styled.root>
  )
}
