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

async function handleSubmit(values, setState) {
  const url = `https://app.convertkit.com/forms/${FORM_ID}/subscriptions`
  setState({ submitted: false })

  axios
    .post(url, { ...values, api_key: process.env.CONVERTKIT_PUBLIC_KEY })
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
          name: "",
        }}
        validateOnMount
        validationSchema={SubscribeSchema}
        onSubmit={values => handleSubmit(values, setState)}
      >
        {({ isValid }) => {
          return (
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
                    Get free previews of XYZ Course I’m working on.
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
                        flexBasis: ["100%", "100%", "50%"],
                        ml: [0, 0, 3],
                        mt: [2, 2, 0],
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
                            color: alpha("text", 0.5),
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
                      disabled={!isValid}
                      sx={{
                        ml: [0, 0, 3],
                        mt: [2, 2, 0],
                        span: {
                          position: "relative",
                          zIndex: 999,
                          textShadow: "0 1px 5px rgba(0,0,0,0.3)",
                        },
                      }}
                    >
                      <span>Get Notified</span>
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
