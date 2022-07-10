import * as React from "react"
import Layout from "../components/layout"

import { text } from "../components/layout.module.css"


const IndexPage = () => {
  return (
    <Layout pageTitle="Servicios">
      <div className={text}>
        Hola aca se va ha definir la introduccion y descripcion principal.
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </div>
    </Layout>
  )
}

export default IndexPage
