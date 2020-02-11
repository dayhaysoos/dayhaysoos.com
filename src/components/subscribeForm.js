/** @jsx jsx */
import React, { useState } from "react"
import { jsx, Flex, Box, Button, Heading } from "theme-ui"
import { alpha } from "@theme-ui/color"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { navigate } from "gatsby"

const FORM_ID = process.env.CONVERTKIT_SIGNUP_FORM

const SubscribeSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("*Email is required"),
  name: Yup.string(),
})

const PostSubmissionMessage = ({ response }) => (
  <div
    sx={{
      backgroundImage:
        "linear-gradient(45deg, #000000 25%, #ffffff 25%, #ffffff 50%, #000000 50%, #000000 75%, #ffffff 75%, #ffffff 100%)",
    }}
  >
    Thanks so much for signing up! There's one last step. Please check your
    inbox for an email that just got sent. You'll need to click the confirmation
    link to receive any further emails.
  </div>
)

async function handleSubmit(values, setState) {
  const url = `https://app.convertkit.com/forms/${FORM_ID}/subscriptions`
  setState({ submitted: true, loading: true })

  axios
    .post(url, { ...values, api_key: process.env.CONVERTKIT_PUBLIC_KEY })
    .then(
      ({ data }) => {
        setState({
          submitted: true,
          loading: false,
          response: data,
          errorMessage: null,
        })
      },
      err => {
        setState({
          submitted: false,
          loading: false,
          errorMessage: "Something went wrong!",
        })
      }
    )
}

const SubscribeForm = props => {
  const [state, setState] = useState({ submitted: false })

  const { submitted, loading, response, errorMessage } = state

  return (
    <div {...props}>
      <Formik
        initialValues={{
          email: "",
          name: "",
        }}
        validationSchema={SubscribeSchema}
        onSubmit={values => handleSubmit(values, setState)}
        render={({ errors }) => (
          <Form
            sx={{
              ".field-error": {
                color: "red",
                fontSize: 2,
                lineHeight: 2,
                position: "absolute",
                maxWidth: "300px",
              },
            }}
          >
            {(!submitted || loading) && (
              <>
                <Heading as="h2" id="get-free-previews">
                  Get free previews of XYZ Course I’m working on.
                </Heading>
                <Flex sx={{ flexDirection: ["column", "row"] }}>
                  <Box>
                    <Field
                      aria-label="first name"
                      aria-required="false"
                      name="name"
                      placeholder="First name"
                      type="text"
                      sx={{
                        "::placeholder": {
                          color: alpha("text", 0.5),
                        },
                        bg: "white",
                        border: "1px solid",
                        borderColor: "gray",
                        borderRadius: "4px",
                        fontSize: [2, "18px"],
                        height: "48px",
                        padding: "0.75rem",
                        display: "block",
                        width: "100%",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      flexBasis: ["100%", "100%", "50%"],
                      pl: [0, 0, 2],
                      pb: 4,
                      position: "relative",
                    }}
                  >
                    <Field
                      aria-label="your email"
                      aria-required="true"
                      name="email"
                      placeholder="Your email"
                      type="email"
                      noValidate="novalidate"
                      sx={{
                        "::placeholder": {
                          color: "gray",
                          fontSize: 2,
                        },
                        bg: "white",
                        border: "1px solid",
                        borderColor: "gray",
                        borderRadius: "4px",
                        fontSize: 2,
                        height: "48px",
                        padding: "0.75rem",
                        display: "block",
                        width: "100%",
                      }}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="field-error"
                    />
                  </Box>
                  <Button
                    data-element="submit"
                    type="submit"
                    sx={{
                      pointerEvents: loading ? "none" : "inherit",
                      span: {
                        position: "relative",
                        zIndex: 999,
                        textShadow: "0 1px 5px rgba(0,0,0,0.3)",
                      },
                    }}
                  >
                    <span>
                      {!loading && "Get Notified"}
                      {/* {loading && <img src={LoadingAnimation} alt="Submitting" />} */}
                    </span>
                  </Button>
                </Flex>
              </>
            )}
          </Form>
        )}
      />
      {submitted && !loading && navigate("/confirmed/")}
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  )
}

export default SubscribeForm
