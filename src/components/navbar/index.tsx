// eslint-disable-next-line no-use-before-define
import React from 'react'
import Container from './styles'

const Header = () => {
  return (
    <Container>
      <nav>
        <div>
          <h3>AR SHAKIR</h3>
        </div>
        <div>
          <ul>
            <li>Product</li>
            <li>Template</li>
            <li>Blog</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="nav-btns">
          <button className='sign-in-btn'>Sign In</button>
          <button className="start-btn">Start Free</button>
        </div>
      </nav>
    </Container>
  )
}

export default Header