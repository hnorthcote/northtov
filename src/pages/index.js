import * as React from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>
        Hola aca se va ha definir la introduccion y descripcion principal.
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
    </Layout>
  )
}

export default IndexPage
