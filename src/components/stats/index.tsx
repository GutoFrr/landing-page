// eslint-disable-next-line no-use-before-define
import React from 'react'
import Container from './styles'
import Image from 'next/image'
import { RiUserFill } from 'react-icons/ri'
import { AiFillStar } from 'react-icons/ai'

import scribble from '../../assets/images/stats-images/scribble.png'

const Stats = () => {
  return (
    <Container>
      <div className="stats-container">
        <div className="stats-phrase">
          <p>We speak with our powerfull statistics</p>
        </div>
        <hr />
        <div className="stats">
          <div className="stats-users">
            <h1>1M+</h1>
            <div className="active-users">
              <RiUserFill className="icon" />
              <h5>Active Users</h5>
            </div>
          </div>
          <div className="stats-reviews">
            <h1>30k+</h1>
            <div className="star-reviews">
              <AiFillStar className="icon" />
              <h5>5-Stars Reviews</h5>
            </div>
          </div>
          <div className="stats-transactions">
            <h1>$252M</h1>
            <div className="transactions">
              <AiFillStar className="icon" />
              <h5>Transactions</h5>
            </div>
          </div>
          <Image
            src={scribble}
            alt="Rabisco stats container"
            quality={100}
          />
        </div>
      </div>
    </Container>
  )
}

export default Stats
