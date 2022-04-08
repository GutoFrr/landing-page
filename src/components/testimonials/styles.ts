import styled from 'styled-components'

const Container = styled.div`
  height: 935px;
  position: relative;

  .testimonials-section {
    padding: 147px 0 153px 0;
  }

  .testimonials-title {
    width: 570px;
    height: 161px;
    margin-bottom: 60px;

    h1 {
      width: 426px;
      height: 66px;
      font-weight: 800;
      font-size: 71px;
      line-height: 66px;
      letter-spacing: -0.03em;
      margin-bottom: 37px;
    }

    p {
      width: 570px;
      height: 58px;
      font-weight: 500;
      font-size: 16px;
      line-height: 29px;
      letter-spacing: -0.02em;
    }
  }

  .testimonials {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    column-gap: 41px;
  }

  .girl-testimonial {
    position: relative;
    display: flex;
    align-items: center;
    width: 48%;
    height: 370px;
    background: #ffffff;
    border: 1px solid #cfcfcf;
    box-sizing: border-box;
    border-radius: 10px;

    .girl-quote-icon {
      position: absolute;
      top: -30px;
      left: 35px;
    }
  }

  .girl-text {
    flex-direction: column;
    padding: 80px 0px 80px 40px;
    width: 90%;
    margin-right: auto;

    h6 {
      font-weight: 600;
      font-size: 1.3rem;
      line-height: 36px;
      letter-spacing: -0.02em;
      margin-bottom: 41px;
    }

    p {
      width: 249px;
      font-weight: 600;
      font-size: 20px;
      line-height: 22px;
      letter-spacing: -0.02em;
    }
  }

  .girl-image {
    width: 60%;
    margin: 35px 25px 25px 25px;
  }

  .guy-testimonial {
    position: relative;
    display: flex;
    align-items: center;
    width: 48%;
    height: 370px;
    background: #ffffff;
    border: 1px solid #cfcfcf;
    box-sizing: border-box;
    border-radius: 10px;

    .guy-quote-icon {
      position: absolute;
      top: -30px;
      left: 35px;
    }

    .guy-text {
      flex-direction: column;
      padding: 80px 0px 80px 40px;
      width: 90%;
      margin-right: auto;

      h6 {
        font-weight: 600;
        font-size: 1.3rem;
        line-height: 36px;
        letter-spacing: -0.02em;
        margin-bottom: 41px;
      }

      p {
        width: 249px;
        height: 22px;
        font-weight: 600;
        font-size: 20px;
        line-height: 22px;
        letter-spacing: -0.02em;
      }
    }

    .guy-image {
      width: 60%;
      margin: 35px 25px 25px 25px;
    }
  }

  .scribble {
    position: absolute;
    top: 178px;
    right: 360px;
  }
`

export default Container
