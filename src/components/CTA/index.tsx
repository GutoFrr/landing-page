// eslint-disable-next-line no-use-before-define
import React from 'react'
import Container from './styles'
import Image from 'next/image'

import background from '../../assets/images/cta-images/background.png'

const CTA = () => {
  return (
    <Container>
      <div className="cta-container">
        <Image src={background} quality={100}/>
          <div>
            <h1>Discover a better way to manage spendings</h1>
            <button>Get Started Now</button>
          </div>
      </div>
    </Container>
  )
}

export default CTA
