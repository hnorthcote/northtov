import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import {    container,
            navLinks,
            navLinkItem,
            navLinkText,
            top,
            logo} from './layout.module.css'

const Header = ({pageTitle}) => {
    return (
        <div className={top}>
            <StaticImage
            className={logo}
            alt="logo"
            src="../images/logo.png"
            />
            <div className={container}>
                <title>{pageTitle}</title>
                <nav>
                    <ul className={navLinks}>
                        <li className={navLinkItem}><Link to = "/" className={navLinkText}>Home</Link></li>
                        <li className={navLinkItem}><Link to = "/about" className={navLinkText}>About</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;