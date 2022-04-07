// eslint-disable-next-line no-use-before-define
import React from 'react'
import Container from './styles'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

import corporatists from '../../assets/images/blog-images/corporatists.png'
import workingDesigners from '../../assets/images/blog-images/working-designers.png'
import sunBuilding from '../../assets/images/blog-images/sun-building.png'
import tablet from '../../assets/images/blog-images/tablet.png'
import Layout from '../layout/styles'

const RecentBlogs = () => {
  return (
    <Container>
      <Layout>
        <div className="recent-blogs">
          <h1>Recent Blogs</h1>
          <div className="best-practice-top">
            <div className="best-pratice-top-column">
              <h5>Best Practices</h5>
              <h3>
                In design active temper be uneasy. Thirty for remove plenty
                regard.
              </h3>
              <h6>Read More</h6>
              <HiArrowNarrowRight className="arrow-icon" />
            </div>
            <Image
              src={corporatists}
              alt="Arquitetos corporativistas"
              quality={100}
            />
          </div>
          <div className="best-practice-bottom">
            <div className="practice">
              <div className="practice-text">
                <h5>Best Practices</h5>
                <h3>Partiality on or continuing particular principles as. </h3>
              </div>
              <Image
                src={workingDesigners}
                alt="Arquitetos trabalhando"
                quality={100}
              />
            </div>
            <div className="practice">
              <div className="practice-text">
                <h5>Best Practices</h5>
                <h3>Village did removed enjoyed explain.</h3>
              </div>
              <Image
                src={sunBuilding}
                alt="Sol raiando através dos prédios"
                quality={100}
              />
            </div>
            <div className="practice">
              <div className="practice-text">
                <h5>Best Practices</h5>
                <h3>
                  Wise busy past both park when an ye no. Nay likely her length.
                </h3>
              </div>
              <Image
                src={tablet}
                alt="Pessoa usando tablet"
                quality={100}
              />
            </div>
          </div>
        </div>
      </Layout>
    </Container>
  )
}

export default RecentBlogs
