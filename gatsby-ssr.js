var React = require("react")

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()
  replaceHeadComponents([
    ...headComponents,
    <link rel="stylesheet" href="https://use.typekit.net/nyx2znq.css" />,
  ])
}
