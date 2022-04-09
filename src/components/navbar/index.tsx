/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-use-before-define
import React from 'react'
import Container from './styles'
import MenuItem, { ItemProps } from './menu-item/index'

const Navbar = () => {
  const menuItems:ItemProps[] = [
    { name: 'Product', subItems: ['lorem ipsum', 'dolor sit', 'amet consectetur'] },
    { name: 'Template', subItems: ['adipisicing elit', 'id sint non', 'atque ipsa'] },
    { name: 'Blog' },
    { name: 'Pricing' }
  ]

  return (
    <Container>
        <nav>
          <div>
            <h3>AR SHAKIR</h3>
          </div>
          <ul className="list">
            {menuItems.map((item) => (
              <li><MenuItem name={item.name} subItems={item.subItems} /></li>
            ))}
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
