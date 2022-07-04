import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { logo, top } from "../components/layout.module.css"


const IndexPage = () => {
  return (
    <div className={top}>
    <StaticImage
    className={logo}
    alt="logo"
    src="../images/logo.png"
    />
    <Layout pageTitle="Home Page">
      <p>
        Hola aca se va ha definir la introduccion y descripcion principal.
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
    </Layout>
    </div>
  )
}

export default IndexPage
