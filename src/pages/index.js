import * as React from "react"
import { Link } from "gatsby"

// styles
// const pageStyles = {
//   color: "#232129",
//   padding: 96,
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// }
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
// const headingAccentStyles = {
//   color: "#663399",
// }
const paragraphStyles = {
  marginBottom: 48,
}
// const listStyles = {
//   marginBottom: 96,
//   paddingLeft: 0,
// }
// const listItemStyles = {
//   fontWeight: 300,
//   fontSize: 24,
//   maxWidth: 560,
//   marginBottom: 30,
// }

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

// const docLinkStyle = {
//   ...linkStyle,
//   listStyleType: "none",
//   marginBottom: 24,
// }

// const descriptionStyle = {
//   color: "#232129",
//   fontSize: 14,
//   marginTop: 10,
//   marginBottom: 0,
//   lineHeight: 1.25,
// }

// const docLink = {
//   text: "Documentation",
//   url: "https://www.gatsbyjs.com/docs/",
//   color: "#8954A8",
// }


// // data
// const links = [
//   {
//     text: "Tutorial",
//     url: "https://www.gatsbyjs.com/docs/tutorial/",
//     description:
//       "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
//     color: "#E95800",
//   },
// ]


const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        NorthTov's new site!!!
        <br />
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p style={paragraphStyles}>
        Hola aca se va ha definir la introduccion y descripcion principal.
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
      <Link to="/about">About NorthTov</Link>
    </main>
  )
}

export default IndexPage
