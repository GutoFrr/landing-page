/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import Container from './styles'

export interface ItemProps {
  name: string;
  subItems?: string[];
}

const MenuItem: React.FC<ItemProps> = (itemProps) => {
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)

  return (
    <Container>
      <div className="product-button" onClick={onClick}>
        <button>{itemProps.name}</button>
        {itemProps.subItems && <FiChevronDown className={`icon ${isActive ? 'active' : 'inactive'}`} />}
      </div>

      {itemProps.subItems && (
        <div
          className={`menu ${isActive ? 'active' : 'inactive'}`}
        >
          <ul>
            {itemProps.subItems.map((subItem) => (
              <li>{subItem}</li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  )
}

export default MenuItem
