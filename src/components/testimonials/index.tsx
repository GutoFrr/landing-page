// eslint-disable-next-line no-use-before-define
import React from 'react'
import Container from './styles'
import Image from 'next/image'

// import scribble from '../../assets/images/testimonials-images/scribble.png'
// import quoteIcon from '../../assets/images/testimonials-images/quote-icon.png'
import happyGirl from '../../assets/images/testimonials-images/happy-girl.png'
import happyGuy from '../../assets/images/testimonials-images/happy-guy.png'
import Layout from '../layout/styles'

const Testimonials = () => {
  return (
    <Container>
      <Layout>
        <div className="testimonials-section">
          <div className="testimonials-title">
            <h1>Testimonials</h1>
            <p>
              We so opinion friends me message as delight. Whole front do of plate
              heard oh ought. His defective nor convinced residence own.
            </p>
          </div>
          <div className="testimonials">
            <div className="girl-testimonial">
              <div className="girl-text">
                <h6>
                  Wise busy past both park when an ye no. Nay likely her length
                  sooner thrown sex lively income. The expense windows . Blessing
                  welcomed ladyship.
                </h6>
                <p className="mike-quote">- Mike Taylor, Web Designer</p>
              </div>
              <Image
                src={happyGirl}
                alt="Mulher feliz na citação do Mike Taylor"
                className="girl-image"
                quality={100}
              />
            </div>
            <div className="guy-testimonial">
              <div className="guy-text">
                <h6>
                  Wise busy past both park when an ye no. Nay likely her length
                  sooner thrown sex lively income. The expense windows . Blessing
                  welcomed ladyship.
                </h6>
                <p className="mike-quote">- Mike Taylor, Web Designer</p>
              </div>
              <Image
                src={happyGuy}
                alt="Homem feliz na citação do Mike Taylor"
                className="guy-image"
                quality={100}
              />
            </div>
          </div>
        </div>
      </Layout>
    </Container>
  )
}

export default Testimonials
