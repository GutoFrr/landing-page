import styled from 'styled-components'

const Container = styled.div`
  height: 1185px;

  .recent-blogs {
    padding: 147px 0 150px 0;

    h1 {
      width: 435px;
      height: 66px;
      font-weight: 800;
      font-size: 71px;
      line-height: 66px;
      letter-spacing: -0.03em;
      margin-bottom: 72px;
    }

    h3 {
      width: 524px;
      height: 72px;
      font-weight: 700;
      font-size: 29px;
      line-height: 36px;
      letter-spacing: -0.02em;
    }

    h5 {
      width: 150px;
      height: 36px;
      font-weight: 700;
      font-size: 16px;
      line-height: 36px;
      letter-spacing: 0.07em;
      text-transform: uppercase;
    }

    h6 {
      width: 81px;
      height: 16px;
      font-weight: 600;
      font-size: 16px;
      line-height: 16px;
      color: #1B1C31;
    }
  }

  .best-practice-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 29px;
    background-color: #FFFFFF;
  }

  .best-pratice-top-column {
    flex-direction: column;
    padding: 34px 0 53px 28px;

    h5 {
      margin-bottom: 6px;
    }

    h3 {
      margin-bottom: 68px;
    }

    h6 {
      display: inline;
      margin-right: 10px;
    }

    .arrow-icon {
      vertical-align: sub;
    }
  }

  .best-practice-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 29px;

    h5 {
      margin-bottom: 7px;
    }

    h3 {
      width: 288px;
      margin-bottom: 58px;
    }
  }

  .practice {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 382px;
    height: 450px;
    background-color: #FFFFFF;
  }

  .practice-text{
    padding: 25px 62px 58px 32px;
  }
`

export default Container
