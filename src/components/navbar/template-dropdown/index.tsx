// eslint-disable-next-line no-use-before-define
import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
import Container from './styles'

const Template = () => {
  return (
    <Container>
        <div className="template-button">
          <button>
            Template
          </button>
          <FiChevronDown className="icon" />
        </div>
    </Container>
  )
}

export default Template
