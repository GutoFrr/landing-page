import styled from 'styled-components'

const Container = styled.div`
  height: 833px;
  background-color: #c9e7f2;

  .feature-content {
    padding: 146px 0 97px 0;
  }

  .features-title {
    width: 830px;
    height: 161px;
    margin-bottom: 51px;

    h1 {
      width: 830px;
      height: 66px;
      font-weight: 800;
      font-size: 71px;
      line-height: 66px;
      letter-spacing: -0.03em;
      margin-bottom: 37px;
    }

    p {
      width: 557px;
      height: 58px;
      font-weight: 500;
      font-size: 16px;
      line-height: 29px;
      letter-spacing: -0.02em;
    }
  }

  .folder-cards {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 30px;

    .colorful-folder {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 380px;
      height: 338px;
      background: #ffffff;
      border: 1px solid #abc8d2;
      box-sizing: border-box;
      border-radius: 10px;
      padding-left: 31px;
      background-color: #FFFFFF;

      .folder-image {
        padding-top: 53px;
      }
      
      h3 {
        margin-block: 33px 16px;
      }
    }

    h3 {
      width: 305.14px;
      height: 70px;
      font-weight: 800;
      font-size: 22px;
      line-height: 35px;
      letter-spacing: -0.03em;
    }

    p {
      width: 298.51px;
      height: 78px;
      font-weight: 500;
      font-size: 15px;
      line-height: 26px;
      letter-spacing: -0.02em;
    }
  }

  .colorful-folder h3:nth-child(2) {
    width: 276px;
    height: 70px;
  }

  .text-cards {
    display: flex;
    flex-direction: column;
    

    div {
      width: 380px;
      height: 153px;
      background: #FFFFFF;
      border: 1px solid #ABC8D2;
      box-sizing: border-box;
      border-radius: 10px;
      padding: 42px 0 41px 31px;
    }
  }

  .text-cards div:first-child {
      margin-bottom: 32px;
  }

  .bleft-scribble {
    position: absolute;
    left: 0.000001%;
    top: 3898px;
  }
`

export default Container
