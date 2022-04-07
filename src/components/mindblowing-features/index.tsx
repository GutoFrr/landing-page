// eslint-disable-next-line no-use-before-define
import React from 'react'
import Container from './styles'
import Image from 'next/image'

import orangeFolder from '../../assets/images/folders-images/orange-folder.png'
import blueFolder from '../../assets/images/folders-images/blue-folder.png'

const MindblowingFeatures = () => {
  return (
    <Container>
      <div className="feature-content">
        <div className="features-title">
          <h1>Features that blows mind</h1>
          <p>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
          </p>
        </div>
        <div className="folder-cards">
          <div className="colorful-folder">
            <Image
              src={orangeFolder}
              alt="Pasta laranja features"
              className="folder-image"
              quality={100}
            />
            <h3>Really boy law county she unable her sister</h3>
            <p>
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought.
            </p>
          </div>
          <div className="colorful-folder">
            <Image
              src={blueFolder}
              alt="Pasta azul features"
              className="folder-image"
              quality={100}
            />
            <h3>Among sex are leave law built now</h3>
            <p>
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought.
            </p>
          </div>
          <div className="text-cards">
            <div>
              <h3>Merits behind on afraid or warmly</h3>
            </div>
            <div>
              <h3>Believing neglected so so allowance existence</h3>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default MindblowingFeatures
