import styled from 'styled-components'

const Container = styled.div`
  .section-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 71px;

    .quote-card {
      background-color: rgba(196, 196, 196, 0.3);
      width: 402px;
      height: 177px;
      border-radius: 20px;
      position: relative;
    }

    .quote-icon {
      position: absolute;
      top: -20px;
      left: 30px;
    }

    .quote-text {
      padding: 38px 34px 34px 34px;

      p {
        font-weight: 600;
        font-size: 15px;
        line-height: 22px;
        letter-spacing: -0.02em;
        margin-bottom: 18px;
      }

      h6 {
        font-weight: 600;
        font-size: 15px;
        line-height: 22px;
        letter-spacing: -0.02em;
      }
    }
  }

  .tracking-title {
    max-width: 646px;
    height: 209px;

    h1 {
      width: 520px;
      height: 132px;
      margin-bottom: 19px;
      font-weight: 800;
      font-size: 56px;
      line-height: 66px;
      letter-spacing: -0.03em;
    }

    p {
      width: 449px;
      height: 58px;
    }
  }

  .folder-cards {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 382px;
    margin-bottom: 139px;
  }

  .folder-cards div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 380px;
    height: 382px;
    row-gap: 31px;
    background: #ffffff;
    border: 1px solid #dbe4e9;
    box-sizing: border-box;
    border-radius: 20px;
    background-color: #ffffff;
  }

  .folder-card-number {
    align-self: flex-start;
    padding: 21px 0 0 22px;
    font-weight: 800;
    font-size: 22px;
    line-height: 30px;
  }

  .folder-cards h2 {
    width: 276px;
    height: 68px;
    font-weight: 800;
    font-size: 30px;
    line-height: 34px;
    text-align: center;
    letter-spacing: -0.03em;
  }

  .folder-cards p {
    width: 270px;
    font-weight: 500;
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    letter-spacing: -0.02em;
  }

  .insurance-section-top {
    height: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 83px;

    h6 {
      color: #3734a9;
      font-weight: 700;
      font-size: 14px;
      line-height: 19px;
      text-transform: uppercase;
      margin-bottom: 13px;
    }

    h1 {
      font-weight: 800;
      font-size: 50px;
      line-height: 60px;
      letter-spacing: -0.03em;
      width: 483px;
      height: 180px;
      margin-bottom: 29px;
    }

    p {
      width: 446px;
      height: 60px;
      color: #64607d;
      font-weight: 500;
      font-size: 18px;
      line-height: 30px;
      letter-spacing: -0.02em;
      margin-bottom: 23px;
    }

    hr {
      width: 490px;
      border: 1px solid #c4c4c4;
      margin-bottom: 27px;
    }

    h5 {
      color: #64607d;
      font-weight: 500;
      font-size: 19px;
      line-height: 30px;
      letter-spacing: -0.02em;
      display: inline;
      text-align: center;
      vertical-align: super;
    }

    .check-icon {
      color: #fdbc64;
      width: 24px;
      height: 24px;
      margin-right: 11px;
    }
  }

  .insurance-section-bottom {
    height: 602px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 96px;

    h6 {
      color: #3734a9;
      font-weight: 700;
      font-size: 14px;
      line-height: 19px;
      text-transform: uppercase;
      margin-bottom: 13px;
    }

    h1 {
      width: 439px;
      height: 120px;
      font-weight: 800;
      font-size: 50px;
      line-height: 60px;
      letter-spacing: -0.03em;
      margin-bottom: 14px;
    }

    p {
      color: #64607d;
      font-weight: 500;
      font-size: 18px;
      line-height: 30px;
      letter-spacing: -0.02em;
      width: 376px;
      height: 90px;
      margin-bottom: 35px;
    }
  }

  .insurance-description-bottom {
    padding-top: 130px;

    .quote-card {
      background-color: rgba(196, 196, 196, 0.3);
      width: 479px;
      height: 152px;
      border-radius: 20px;
      position: relative;
    }

    .quote-icon {
      position: absolute;
      top: -20px;
      left: 30px;
    }

    .quote-text {
      padding: 38px 34px 34px 34px;

      p {
        width: 426px;
        height: 44px;
        font-family: "Manrope";
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 22px;
        letter-spacing: -0.02em;
        color: #000000;
        margin-bottom: 14px;
      }

      h6 {
        font-family: "Manrope";
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 22px;
        letter-spacing: -0.02em;
        color: #000000;
        text-transform: capitalize;
      }
    }
  }
`

export default Container
