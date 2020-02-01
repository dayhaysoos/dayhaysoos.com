// export { default } from "../components/layout"

/** @jsx jsx */
import { jsx, Container } from "theme-ui"
// import Head from "./head"

import Header from "../components/header"
import Footer from "../components/footer"

export default props => {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <main
        sx={{
          width: "100%",
          flex: "1 1 auto",
        }}
      >
        <Container>{props.children}</Container>
      </main>
      <Footer />
    </div>
  )
}

// <>
//   <Head {...props} />
//   {props.children}
// </>
