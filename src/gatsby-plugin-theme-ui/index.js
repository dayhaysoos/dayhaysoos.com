import nightOwl from "@theme-ui/prism/presets/night-owl.json"

export default {
  breakpoints: ["640px", "768px", "992px", "1200px", "1920px"],
  colors: {
    text: "#191919",
    background: "#ffffff",
    primary: "#0036ff",
    gray: "#ebebeb",
  },
  fonts: {
    body: '"Inter", sans-serif',
    heading: '"Inter", sans-serif',
    monospace: '"calling-code", monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  layout: {
    container: {
      maxWidth: "992px",
      px: [3, 4],
    },
  },
  links: {
    regular: {
      color: "primary",
      textDecoration: "none",
      "@media (hover: hover)": {
        ":hover": {
          textDecoration: "underline",
        },
      },
    },
  },
  styles: {
    root: {
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      "h1, h2, h3, h4, h5, h6": {
        a: {
          color: "inherit",
          fontWeight: "inherit",
        },
      },
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    // a: {
    //   color: "primary",
    //   fontWeight: 900,
    // },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      ...nightOwl,
      p: [2, 2, 3],
      my: [4, 4, 5],
      borderRadius: "5px",
    },
    img: {
      maxWidth: "100%",
    },
  },
}
