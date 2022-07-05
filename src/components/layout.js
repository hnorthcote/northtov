import * as React from 'react'
import { heading }from './layout.module.css'
import Header from './header'
import './layout.module.css'



const Layout = ({pageTitle, children}) => {
    return (
        <div>
            <Header/>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
      )
}

export default Layout