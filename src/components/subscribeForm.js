/** @jsx jsx */
import React, { useState } from "react"
import { jsx, Flex, Box, Button, Heading } from "theme-ui"
import { alpha } from "@theme-ui/color"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { navigate } from "gatsby"

const FORM_ID = process.env.GATSBY_CONVERTKIT_SIGNUP_FORM

const SubscribeSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("*Email is required"),
  first_name: Yup.string(),
})

async function handleSubmit(values, setState) {
  const url = `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`
  setState({ submitted: false })

  axios
    .post(url, { ...values, api_key: process.env.GATSBY_CONVERTKIT_PUBLIC_KEY })
    .then(
      ({ data }) => {
        setState({
          submitted: true,
          errorMessage: null,
        })
      },
      err => {
        setState({
          submitted: false,
          errorMessage: "Something went wrong!",
        })
      }
    )
}

const SubscribeForm = props => {
  const [state, setState] = useState({ submitted: false })

  const { submitted, errorMessage } = state

  return (
    <div {...props}>
      <Formik
        initialValues={{
          email: "",
          first_name: "",
        }}
        validationSchema={SubscribeSchema}
        onSubmit={values => handleSubmit(values, setState)}
      >
        {({ isValid, values, isSubmitting }) => {
          return (
            <Form
              autoComplete="off"
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
              {!submitted && (
                <>
                  <Heading
                    as="h2"
                    id="get-free-previews"
                    sx={{
                      fontWeight: "bold",
                      maxWidth: "620px",
                      fontSize: [4, 4, 5, 6],
                      mb: 3,
                    }}
                  >
                    I'm planning on launching my first product. Get e-mails from
                    me about my journey
                  </Heading>
                  <Heading
                    as="h4"
                    sx={{
                      fontWeight: "semibold",
                      fontSize: ["15px", "15px", 2],
                      mb: 4,
                    }}
                  >
                    There will be no spam and you can unsubscribe at any time.
                    Get early access to new content and more personal insights
                    on the cool things I'm working on
                  </Heading>
                  <Flex sx={{ flexDirection: ["column", "column", "row"] }}>
                    <Box
                      sx={{
                        flexBasis: ["100%", "100%", "40%"],
                      }}
                    >
                      <Field
                        aria-label="first name"
                        aria-required="false"
                        name="first_name"
                        id="first_name"
                        placeholder="First name"
                        type="text"
                        autoComplete="given-name"
                        sx={{
                          "::placeholder": {
                            color: alpha("text", 0.7),
                          },
                          background: "white",
                          border: "2px solid",
                          borderColor: "gray",
                          borderRadius: 0,
                          fontSize: [2, "18px"],
                          height: "56px",
                          padding: "0.75rem",
                          display: "block",
                          width: "100%",
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        flexBasis: ["100%", "100%", "60%"],
                        ml: [0, 0, 3],
                        mt: [2, 2, 0],
                        position: "relative",
                      }}
                    >
                      <Field
                        aria-label="your email"
                        aria-required="true"
                        name="email"
                        id="email"
                        placeholder="Your email"
                        type="email"
                        noValidate="novalidate"
                        autoComplete="email"
                        sx={{
                          "::placeholder": {
                            color: alpha("text", 0.7),
                          },
                          bg: "white",
                          border: "2px solid",
                          borderColor: "gray",
                          borderRadius: 0,
                          fontSize: [2, "18px"],
                          height: "56px",
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
                      disabled={values.email === "" || !isValid}
                      sx={{
                        flexShrink: 0,
                        ml: [0, 0, 3],
                        mt: [2, 2, 0],
                        px: 4,
                        bg: "text",
                        fontSize: ["16px", "16px", "18px"],
                        fontWeight: "bold",
                        borderRadius: 0,
                        height: "56px",
                        pointerEvents: isSubmitting ? "none" : "initial",
                        cursor:
                          values.email === "" || !isValid
                            ? "not-allowed"
                            : "pointer",
                      }}
                    >
                      {isSubmitting ? "Wait..." : "Join Now"}
                    </Button>
                  </Flex>
                </>
              )}
            </Form>
          )
        }}
      </Formik>
      {submitted && navigate("/confirmed/")}
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  )
}

export default SubscribeForm
