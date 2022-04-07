/* eslint-disable no-use-before-define */
import React from 'react'
import Container from './styles'
import Image from 'next/image'
import { BsFillCheckCircleFill } from 'react-icons/bs'

import blueFolder from '../../assets/images/folders-images/blue-folder.png'
import orangeFolder from '../../assets/images/folders-images/orange-folder.png'
import yellowFolder from '../../assets/images/folders-images/yellow-folder.png'
import testimonialQuote from '../../assets/images/insurance-cards/testimonial.png'
import insuranceCard from '../../assets/images/insurance-cards/recieved-cards.png'
import testimonialQuote2 from '../../assets/images/insurance-cards/testimonial2.png'
import totalBalance from '../../assets/images/insurance-cards/total-balance.png'

const PortfolioTracking = () => {
  return (
    <Container>
      <div className="section-heading">
        <div className="tracking-title">
          <h1>Automated portfolio tracking</h1>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing.
          </p>
        </div>
        <div className="quote-card">
          <Image
            src={testimonialQuote}
            alt="Primeira citação de Mike Taylor"
            quality={100}
          />
        </div>
      </div>
      <div className="folder-cards">
        <div className="folder-card-1">
          <h6 className="folder-card-number">01</h6>
          <Image
            src={blueFolder}
            alt="Pasta azul cards"
            className="colorful-folder"
            quality={100}
          />
          <h2>Connect wallets & companies</h2>
          <p>
            Indulgence way everything joy alteration boisterous the attachment.
            Party we years to order allow asked of.
          </p>
        </div>
        <div className="folder-card-2">
          <h6 className="folder-card-number">02</h6>
          <Image
            src={orangeFolder}
            alt="Pasta laranja cards"
            className="colorful-folder"
            quality={100}
          />
          <h2>Review transactions</h2>
          <p>
            Indulgence way everything joy alteration boisterous the attachment.
            Party we years to order allow asked of.
          </p>
        </div>
        <div className="folder-card-3">
          <h6 className="folder-card-number">03</h6>
          <Image
            src={yellowFolder}
            alt="Pasta amarela cards"
            className="colorful-folder"
            quality={100}
          />
          <h2>Get income insights</h2>
          <p>
            Indulgence way everything joy alteration boisterous the attachment.
            Party we years to order allow asked of.
          </p>
        </div>
      </div>
      <div className="insurance-section-top">
        <div className="insurance-cards">
          <Image
            src={insuranceCard}
            alt="Notificações do seguro da empresa"
            quality={100}
          />
        </div>
        <div className="insurance-description-top">
          <h6>Why Choose Us</h6>
          <h1>Track your payments on the go with the best way possible</h1>
          <p>
            Indulgence way everything joy alteration boisterous the attachment.
            Party we years to order allow asked of.
          </p>
          <hr />
          <div className="checks">
            <div className="check-item">
              <BsFillCheckCircleFill className="check-icon" />
              <h5>Get Overview at a glance</h5>
            </div>
            <br />
            <div className="check-item">
              <BsFillCheckCircleFill className="check-icon" />
              <h5>Deoposit funds easily, securlity</h5>
            </div>
            <br />
            <div className="check-item">
              <BsFillCheckCircleFill className="check-icon" />
              <h5>Get Live Support</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="insurance-section-bottom">
        <div className="insurance-description-bottom">
          <h6>Why Choose Us</h6>
          <h1>Save money with proper transaction</h1>
          <p>
            We so opinion friends me message as delight.
            Whole front do of plate heard oh ought.
            His defective nor convinced residence own.
          </p>
          <div className="quote-insurance">
            <Image
              src={testimonialQuote2}
              alt="Segunda citação de Mike Taylor"
              quality={100}
            />
          </div>
        </div>
        <div>
          <Image
            src={totalBalance}
            alt="Mão segurando cartão e gráfico"
            quality={100}
          />
        </div>
      </div>
    </Container>
  )
}

export default PortfolioTracking