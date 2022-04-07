// eslint-disable-next-line no-use-before-define
import React from 'react'
import Container from './styles'
import { FaLinkedinIn, FaFacebookMessenger, FaTwitter } from 'react-icons/fa'
import { SiTwoo } from 'react-icons/si'

const Footer = () => {
  return (
    <Container>
      <div className="footer">
        <div className="ar-shakir">
          <h6>Ar Shakir</h6>
          <p>Finance helps companies manage payments easily.</p>
          <div className="icons">
            <FaLinkedinIn />
            <FaFacebookMessenger />
            <FaTwitter />
            <SiTwoo />
          </div>
        </div>
        <div className="footer-menu">
          <div className="company-list">
            <h6>Company</h6>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="resources-list">
            <h6>Resources</h6>
            <ul>
              <li>Proposal Template</li>
              <li>Invoice Template</li>
              <li>Tuturoial</li>
              <li>How to write a contract</li>
            </ul>
          </div>
          <div className="register-list">
            <h6>Join Our Newsletter</h6>
            <div className="email-inputs">
              <input
                type="email"
                placeholder="Your email address"
                className="email-text"
              />
              <button className="email-button">Subscribe</button>
            </div>
            <p>*  Will send you weekly updates for your better finance management.</p>
          </div>
        </div>
      </div>
      <hr />
        <div className="copyright">
          <h6>Copyright @ AR Shakir 2022. All Rights Reserved.</h6>
        </div>
    </Container>
  )
}

export default Footer
