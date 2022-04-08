// eslint-disable-next-line no-use-before-define
import React from 'react'
import Container from './styles'
import Product from './product-dropdown/index'
import Template from './template-dropdown/index'

const Navbar = () => {
  return (
    <Container>
        <nav>
          <div>
            <h3>AR SHAKIR</h3>
          </div>
          <ul className="list">
              <li><Product /></li>
              <li><Template /></li>
              <li>Blog</li>
              <li>Pricing</li>
          </ul>
          <div className="nav-btns">
            <button className='sign-in-btn'>Sign In</button>
            <button className="start-btn">Start Free</button>
          </div>
        </nav>
    </Container>
  )
}

export default Navbar
