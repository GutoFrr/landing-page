// eslint-disable-next-line no-use-before-define
import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '../../styles/globals'
import Header from '../components/header'
import Companies from '../components/companies'
import PortfolioTracking from '../components/portfolio-tracking'
import MindblowingFeatures from '../components/mindblowing-features'
import Testimonials from '../components/testimonials'
import Stats from '../components/stats'
import RecentBlogs from '../components/recent-blogs'
import FAQs from '../components/FAQs'
import CTA from '../components/CTA'
import Footer from '../components/footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Landing Page</title>
      </Head>
      <Container>
        <Header />
        <Companies />
        <PortfolioTracking />
        <MindblowingFeatures />
        <Testimonials />
        <Stats />
        <RecentBlogs />
        <FAQs title={''} open={false} />
        <CTA />
        <Footer />
      </Container>
    </div>
  )
}

export default Home
