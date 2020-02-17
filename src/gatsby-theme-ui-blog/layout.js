/** @jsx jsx */
import { jsx, Container, Heading } from "theme-ui"
import Head from "./head"

import Header from "../components/header"
import PostShareBlock from "../components/postShareBlock"
import Footer from "../components/footer"

export default props => {
  console.log("props: ", props)
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Head {...props} />
      <Header />
      <main
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Container>
          <Heading
            as="h2"
            sx={{
              fontSize: [4, 5, 6, "60px"],
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {props.title}
          </Heading>
          {props.children}
        </Container>
        <PostShareBlock />
      </main>
      <Footer />
    </div>
  )
}
