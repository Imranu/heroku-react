import React from 'react'

const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div>
                    <a href='https://heroku-react-frontend.herokuapp.com/' className='navbar-brand'>
                        Client Management Application
                    </a>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent