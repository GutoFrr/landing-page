import styled from 'styled-components'

const Container = styled.div`
  height: 935px;

  .testimonials-section {
    padding: 147px 0 153px 103px;
  }

  .testimonials-title {
    width: 570px;
    height: 161px;
    margin-bottom: 44px;

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
    column-gap: 41px;
  }

  .girl-testimonial {
    display: flex;
    align-items: center;
    width: 750px;
    height: 400px;
    background: #FFFFFF;
    border: 1px solid #CFCFCF;
    box-sizing: border-box;
    border-radius: 10px;

    .girl-text {
      flex-direction: column;
      width: 368px;
      padding: 77px 0px 80px 40px;
      margin-right: auto;

      h6 {
        width: 368px;
        height: 180px;
        font-weight: 600;
        font-size: 25px;
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
  }
`

export default Container
