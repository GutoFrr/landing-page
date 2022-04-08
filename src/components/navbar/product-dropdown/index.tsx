// eslint-disable-next-line no-use-before-define
import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
import Container from './styles'

const Product = () => {
  return (
    <Container>
      <div className="product-button">
        <button>
          <span>Product</span>
        </button>
        <FiChevronDown className="icon" />
      </div>

      {/* <div>
        <ul>
          <li>Lorem ipsum</li>
          <li>Dolor sit</li>
          <li>Amet consectetur</li>
        </ul>
      </div> */}
    </Container>
  )
}

export default Product
