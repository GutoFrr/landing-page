// eslint-disable-next-line no-use-before-define
import React from 'react'
import Container from './styles'
import Image from 'next/image'
import { AiOutlinePlus } from 'react-icons/ai'

import squaredBalloon from '../../assets/images/faqs-images/squared-balloon.png'
import Layout from '../layout/styles'

const FAQs = () => {
  return (
    <>
      <Container>
        <Layout>
          <div className="faqs-container">
            <h1>Fequently asked questions</h1>
            <div className="question-cards">
              <div className="questions-list">
                <div className="questions-list-item">
                  <div className="questions-list-item-1">
                    <h5>The expense windows adapted sir. Wrong widen drawn.</h5>
                    <AiOutlinePlus className="icon" />
                    <p>
                      Offending belonging promotion provision an be oh consulted
                      ourselves it. Blessing welcomed ladyship she met humoured
                      sir breeding her.
                    </p>
                  </div>
                </div>
                <div className="questions-list-item">
                  <h5>Six curiosity day assurance bed necessary?</h5>
                  <AiOutlinePlus className="icon" />
                </div>
                <div className="questions-list-item">
                  <h5>Produce say the ten moments parties?</h5>
                  <AiOutlinePlus className="icon" />
                </div>
                <div className="questions-list-item">
                  <h5>
                    Simple innate summer fat appear basket his desire joy?
                  </h5>
                  <AiOutlinePlus className="icon" />
                </div>
                <div className="questions-list-item">
                  <h5>Outward clothes promise at gravity do excited?</h5>
                  <AiOutlinePlus className="icon" />
                </div>
              </div>
              <div className="more-question">
                <div className="squared-balloon">
                  <Image
                    src={squaredBalloon}
                    alt="Balão preto de 'more questions'"
                    quality={100}
                  />
                </div>
                <h5>Do you have more questions?</h5>
                <p>
                  End-to-end payments and financial management in a single
                  solution. Meet the right platform to help realize.
                </p>
                <div className="question-button">
                  <p>Shoot a Direct Mail</p>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </Container>
    </>
  )
}

export default FAQs
