import * as React from 'react'
import Layout from '../components/layout'
import { logo, top, text } from "../components/layout.module.css"


const AboutPage =  () => {
    return (

        <Layout pageTitle="Sobre Northtov">
            <p className={text}>Aca va ha haber un poco de descripcion sobre como se creo la compania, las metas, la cultura, los valores, etc.</p>
        </Layout>
    )
}

export default AboutPage