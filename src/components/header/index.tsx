// eslint-disable-next-line no-use-before-define
import React from 'react'
import Image from 'next/image'
import Container from './styles'
import Navbar from '../navbar/index'
import Link from 'next/link'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import Layout from '../layout/styles'

import playButton from '../../../public/header-images/play-button.png'
import blackHand from '../../../public/header-images/black-hand.png'
import whiteHand from '../../../public/header-images/white-hand.png'
import elipse from '../../../public/header-images/elipse.png'
import spinningText from '../../../public/header-images/spinning-text.png'
import topRightScribble from '../../../public/header-images/top-right-scribble.png'
import bottomLeftScribble from '../../../public/header-images/bottom-left-scribble.png'
import bottomRightSmudge from '../../../public/header-images/bottom-right-smudge.png'

const Header = () => {
  return (
    <Container>
      <Layout>
        <Navbar />
        <main>
          <div>
            <h1>Managing freelance payments has never been easier</h1>
          </div>
          <div>
            <p className="main-txt">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing.
            </p>
          </div>
          <div className="start">
            <button className="get-started-btn">Get Started</button>
            <div className="play-icon">
              <Image src={playButton} quality={100} />
            </div>
            <Link href="_blank">See How It Works</Link>
          </div>
          <div className="benefits">
            <div>
              <BsFillCheckCircleFill size={18} />
              <p className="benefits-txt">Free Register</p>
            </div>
            <div>
              <BsFillCheckCircleFill size={18} />
              <p className="benefits-txt">Great Service</p>
            </div>
          </div>
        </main>
        <div className="black-hand">
          <Image
            src={blackHand}
            alt="Mão maior segurando cartão"
            quality={100}
          />
        </div>
        <div className="white-hand">
          <Image
            src={whiteHand}
            alt="Mão menor segurando cartão"
            quality={100}
          />
        </div>
        <div className="elipse">
          <Image src={elipse} alt="Bola preta" quality={100} />
        </div>
        <div className="spinning-text">
          <Image
            src={spinningText}
            alt="Texto animado giratório"
            quality={100}
          />
        </div>
        <div className="top-right-scribble">
          <Image
            src={topRightScribble}
            alt="Rabiscos canto superior direito"
            quality={100}
          />
        </div>
        <div className="bottom-left-scribble">
          <Image
            src={bottomLeftScribble}
            alt="Rabiscos canto inferior esquerdo"
            quality={100}
          />
        </div>
        <div className="bottom-right-smudge">
          <Image
            src={bottomRightSmudge}
            alt="Mancha canto inferior direito"
            quality={100}
          />
        </div>
      </Layout>
    </Container>
  )
}

export default Header
