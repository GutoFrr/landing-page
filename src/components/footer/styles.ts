import styled from 'styled-components'

const Container = styled.div`
  padding-inline: 119px;
  height: 325px;

  .footer {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 59px;
  }

  .ar-shakir {
    display: flex;
    flex-direction: column;
    width: 213px;
    height: 153px;
    margin-right: 76px;

    h6 {
      font-weight: 700;
      font-size: 21px;
      line-height: 28px;
      letter-spacing: -0.02em;
      color: #1b1c31;
      margin-bottom: 18px;
    }

    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: -0.02em;
      color: #757095;
      margin-bottom: 31px;
    }

    .icons {
      display: flex;
      align-items: center;
      column-gap: 16px;
      color: #3734a9;
    }
  }

  .footer-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 911px;
    height: 198px;
  }

  .company-list {
    width: 97px;
    height: 198px;
    margin-right: 137px;

    h6 {
      font-weight: 700;
      font-size: 21px;
      line-height: 24px;
      color: #181433;
      margin-bottom: 24px;
    }

    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 18px;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #181433;
    }
  }

  .resources-list {
    width: 174px;
    height: 198px;
    margin-right: 114px;

    h6 {
      font-weight: 700;
      font-size: 21px;
      line-height: 24px;
      color: #181433;
      margin-bottom: 24px;
    }

    ul {
      width: 174px;
      list-style-type: none;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 18px;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #181433;
    }
  }

  .register-list {
    width: 389px;
    height: 198px;

    h6 {
      font-weight: 700;
      font-size: 21px;
      line-height: 24px;
      color: #181433;
      margin-bottom: 24px;
    }

    .email-inputs {
      margin-bottom: 21px;
    }

    .email-text {
      width: 240px;
      height: 52px;
      background: #eeeeff;
      border: none;
      color: rgba(24, 20, 51, 0.2);
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      letter-spacing: -0.02em;
      padding: 15px;
    }

    .email-button {
      width: 149px;
      height: 52px;
      background: #3734a9;
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      letter-spacing: -0.02em;
      color: #ffffff;
      border: none;
    }
  }

  hr {
    border-top: 2px solid #e5e5ea;
    margin-bottom: 40px;
  }

  .copyright {
    display: flex;
    justify-content: center;
    align-items: center;

    h6 {
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      text-align: center;
      letter-spacing: -0.02em;
      color: #181433;
      margin-bottom: 58px;
    }
  }
`

export default Container
