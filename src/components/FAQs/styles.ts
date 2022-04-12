import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 150px;
  position: relative;

  .faqs-container {

    h1 {
      width: 544px;
      height: 152px;
      font-weight: 800;
      font-size: 71px;
      line-height: 76px;
      letter-spacing: -0.03em;
      margin-bottom: 71px;
    }
  }

  .question-cards {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    column-gap: 48px;
  }

  .questions-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 751px;
    row-gap: 15px;
  }

  .questions-list-items {
    align-items: center;
    background: #ffffff;
    border: 1px solid #cfcfcf;
    border-radius: 10px;
    padding: 25px 0 25px 23px;
    width: 751px;
    height: 74px;
    transition: all 0.3s;

    &.active {
      height: 156px;
    }

    h5 {
      font-weight: 800;
      font-size: 22px;
      line-height: 22px;
      display: inline;
    }

    p {
      width: 644px;
      font-weight: 500;
      font-size: 16px;
      line-height: 31px;
      letter-spacing: -0.02em;
      margin-top: 23px;
    }

    .list-text {
      cursor: default;
      opacity: 0;
    }

    .list-text.active {
      opacity: 1;
      visibility: visible;
      cursor: auto;
    }

    .icon {
      color: #3D3D3D;
      margin-right: 27px;
      width: 20px;
      height: 20px;
      cursor: pointer;
      float: right;
      opacity: 0;
      transition: all 0.3s;

      &.active {
        opacity: 1;
      }

      &.close {
        margin-left: -50px;
      }
    }
  }

  .more-question {
    width: 401px;
    height: 512px;
    background: #ffffff;
    border: 1px solid #cfcfcf;
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .squared-balloon {
      margin-block: 67px 43px;
    }

    h5 {
      width: 317px;
      height: 22px;
      font-weight: 800;
      font-size: 22px;
      line-height: 22px;
      margin-bottom: 23px;
    }

    p {
      width: 333px;
      height: 93px;
      font-weight: 600;
      font-size: 16px;
      line-height: 31px;
      text-align: center;
      letter-spacing: -0.02em;
      margin-bottom: 93px;
    }

    .question-button {
      width: 337px;
      height: 76px;
      background: #ff7f5c;
      border: none;
      cursor: pointer;
      transition: all 0.3s;

      :hover {
        background: #ff9376;
      }

      :active {
        transition: 0.1s;
        background: #ffa78f;
      }
      
      p {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 31px;
        text-align: center;
        letter-spacing: -0.02em;
        color: #ffffff;
        padding: 22px 0;
      }
    }
  }

  .blue-spiral {
    position: absolute;
    top: 87px;
    left: 0.000001%;
  }

  .orange-smudge {
    position: absolute;
    top: 0;
    right: 0.000001%;
  }
`

export default Container
