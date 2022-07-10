import React from "react"
import { Link } from "gatsby"
import {
    footer,
    clearfix,
    footerCopy,
    menuFooterWrapper,
    menuFooter,
    clear,
    copyright,
    socialIcons} from "./layout.module.css"

const Footer = (props) => (
    <div className={[footer, clearfix].join(" ")}>
		<div className={footerCopy}>
			<div className={menuFooterWrapper}>
				<div>
                    <ul className={menuFooter}>
                        <li><Link to="/">Servicios</Link></li>
                        <li><Link to="/contactar">Contactar</Link></li>
                        <li><Link to="/about">Testimonios</Link></li>
                    </ul>
                </div>
            </div>
			<div className={clear}></div>
			<p className={copyright}>© {(new Date().getFullYear())} <Link to="/">{props.title}</Link> | {props.tagline}</p>
		</div>
		<div className={socialIcons}></div>
	</div>
)

export default Footer