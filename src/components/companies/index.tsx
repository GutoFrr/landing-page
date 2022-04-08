/* eslint-disable no-use-before-define */
import React from 'react'
import Container from './styles'
import Image from 'next/image'

import openZeppelinLogo from '../../assets/images/companies-brands/open-zeppelin.png'
import oracleLogo from '../../assets/images/companies-brands/oracle.png'
import morpheusLogo from '../../assets/images/companies-brands/morpheus.png'
import samsungLogo from '../../assets/images/companies-brands/samsung.png'
import mondayLogo from '../../assets/images/companies-brands/monday.png'
import segmentLogo from '../../assets/images/companies-brands/segment.png'
import protonetLogo from '../../assets/images/companies-brands/protonet.png'

const Companies = () => {
  return (
    <Container>
        <h4>Over 32k+ software businesses growing with AR Shakir.</h4>
        <div className="companies-brands">
          <div>
            <Image
              src={openZeppelinLogo}
              alt="Logo empresa Open Zeppelin"
              quality={100}
            />
          </div>
          <div>
            <Image src={oracleLogo} alt="Logo empresa Oracle" quality={100} />
          </div>
          <div>
            <Image
              src={morpheusLogo}
              alt="Logo empresa Morpheus"
              quality={100}
            />
          </div>
          <div>
            <Image src={samsungLogo} alt="Logo empresa Samsung" quality={100} />
          </div>
          <div>
            <Image
              src={mondayLogo}
              alt="Logo empresa Monday.com"
              quality={100}
            />
          </div>
          <div>
            <Image src={segmentLogo} alt="Logo empresa Segment" quality={100} />
          </div>
          <div>
            <Image
              src={protonetLogo}
              alt="Logo empresa Protonet"
              quality={100}
            />
          </div>
        </div>
    </Container>
  )
}

export default Companies
