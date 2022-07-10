import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import {    container,
            navLinks,
            navLinkItem,
            navLinkText,
            top,
            logo} from './layout.module.css'

const Header = ({pageTitle}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div className={top}>
            <StaticImage
            className={logo}
            alt="logo"
            src="../images/logo.png"
            />
            <div className={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
                <nav>
                    <ul className={navLinks}>
                        <li className={navLinkItem}><Link to = "/" className={navLinkText}>Servicios</Link></li>
                        <li className={navLinkItem}><Link to = "/about" className={navLinkText}>Informacion</Link></li>
                        <li className={navLinkItem}><Link to="/contactar" className={navLinkText}>Contactar</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;