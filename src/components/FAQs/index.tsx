/* eslint-disable prefer-const */
/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import Container from './styles'
import Image from 'next/image'
import Layout from '../layout/styles'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

import squaredBalloon from '../../assets/images/faqs-images/squared-balloon.png'
import blueSpiral from '../../assets/images/faqs-images/blue-spiral.png'
import orangeSmudge from '../../assets/images/faqs-images/orange-smudge.png'

interface ItemProps {
  title: string;
  description?: string;
  open: boolean;
}

const FAQs: React.FC<ItemProps> = () => {
  const [isActive, setIsActive] = useState<ItemProps[]>([
    {
      title: 'The expense windows adapted sir. Wrong widen drawn.',
      description:
        'Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her.',
      open: true
    },
    {
      title: 'Six curiosity day assurance bed necessary?',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe modi amet temporibus exercitationem. Velit temporibus voluptatum unde neque modi.',
      open: false
    },
    {
      title: 'Produce say the ten moments parties?',
      description:
        'Quaerat hic illo ullam voluptatibus dolores! Alias, fugit ipsa. Dolorem fugiat illo fuga tempora distinctio earum, ipsum optio?',
      open: false
    },
    {
      title: 'Simple innate summer fat appear basket his desire joy?',
      description:
        'Maiores officia, est commodi reiciendis iste, rerum doloremque sint id reprehenderit at voluptate! Quibusdam eum, voluptatem',
      open: false
    },
    {
      title: 'Outward clothes promise at gravity do excited?',
      description:
        'Repellat harum commodi dolorem aliquam, ratione aliquid quaerat exercitationem voluptatibus. Dolores asperiores eveniet, consequuntur corrupti ea deserunt',
      open: false
    }
  ])

  const handleItemsDisplay = (index: number) => {
    let tempItems = isActive
    tempItems[index].open = !tempItems[index].open
    setIsActive([...tempItems])
  }

  return (
    <Container>
      <Layout>
        <div className="faqs-container">
          <h1>Fequently asked questions</h1>
          <div className="question-cards">
            <div className="questions-list">
              {isActive.map((item, index) => (
                <div
                  className={`questions-list-items ${
                    isActive[index].open ? 'active' : 'inactive'
                  }`}
                >
                  <h5>{item.title}</h5>
                  <AiOutlineMinus
                    className={`icon close ${
                      isActive[index].open ? 'active' : 'inactive'
                    }`}
                    onClick={() => handleItemsDisplay(index)}
                  />
                  <AiOutlinePlus
                    className={`icon ${
                      !isActive[index].open ? 'active' : 'inactive'
                    }`}
                    onClick={() => handleItemsDisplay(index)}
                  />
                  <p
                    className={`list-text ${
                      isActive[index].open ? 'active' : 'inactive'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
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
      <div className="blue-spiral">
        <Image
          src={blueSpiral}
          alt="Espiral azul canto superior esquerdo"
          quality={100}
        />
      </div>
      <div className="orange-smudge">
        <Image
          src={orangeSmudge}
          alt="Mancha laranja canto superior direito"
          quality={100}
        />
      </div>
    </Container>
  )
}

export default FAQs
