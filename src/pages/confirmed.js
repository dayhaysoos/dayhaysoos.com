/** @jsx jsx */
import { jsx, Container, Heading, Text } from "theme-ui"
import { alpha } from "@theme-ui/color"
import Layout from "../components/layout"

export default () => (
  <Layout subscribe={false}>
    <section
      sx={{
        flexGrow: 1,
        backgroundColor: "#000",
        position: "relative",
        display: "flex",
        alignItems: "center",
        py: 4,
        ":before": {
          position: "absolute",
          content: '""',
          width: ["25px", "60px", "220px", "320px"],
          right: 0,
          top: 0,
          bottom: 0,
          backgroundImage:
            "linear-gradient(45deg, #000000 25%, #ffffff 25%, #ffffff 50%, #000000 50%, #000000 75%, #ffffff 75%, #ffffff 100%)",
          backgroundSize: "240.42px 240.42px",
        },
      }}
    >
      <Container>
        <Heading
          as="h3"
          sx={{
            fontSize: ["2", "3", "4", "30px"],
            maxWidth: ["275px", "400px", "510px"],
            color: "white",
            fontWeight: ["semibold", "bold"],
          }}
        >
          Thanks so much for signing up!
          <br />
          There's one last step.
          <br />
          <br />
          Please check your inbox for an email that just got sent. You'll need
          to click the confirmation link to receive any further emails.
        </Heading>
        <Text
          sx={{
            maxWidth: ["275px", "400px", "480px"],
            color: alpha("white", 0.8),
            mt: [4, 5, 6],
            fontSize: [2, 2, 3],
          }}
        >
          If you don't see the email after a few minutes, you might check your
          spam folder or other filters and add nick@dayhaysoos.com to your
          contacts.
        </Text>
        <Text
          sx={{
            maxWidth: ["275px", "480px"],
            color: alpha("white", 0.8),
            mt: [4, 5, 6],
            fontSize: [2, 2, 3],
          }}
        >
          Thanks,
          <br />
          Nick
        </Text>
      </Container>
    </section>
  </Layout>
)
