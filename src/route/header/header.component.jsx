import { Outlet, Link } from 'react-router-dom'
import { Fragment } from 'react'
import './header.styles.scss'

const Header = () => {
    return (
        <Fragment>
            <div className='nav-bar'>
                <Link className='logo-container' to='/'>
                    <h2>SOAStore.</h2>
                </Link>

                <div className='nav-links-container'>
                    <Link className='nav-links' to='shop'>
                        SHOP
                    </Link>

                    <Link className='nav-links' to='signIn'>
                        <svg className='login-icon' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Header