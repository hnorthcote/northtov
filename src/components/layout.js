import * as React from 'react'
import { heading, page }from './layout.module.css'
import Header from './header'
import Footer from './footer'
import './layout.module.css'

const Layout = ({pageTitle, children}) => {

    return (
        <div className={page}>
            <Header/>
            <main>
                <header className={heading}>{ pageTitle }</header>
                {children}
            </main>
            <Footer title="NorthTov" tagline="Experiencia acertada"/>
        </div>
      )
}

export default Layout