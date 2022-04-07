import styled from 'styled-components'

const Container = styled.div`
  height: 735px;
  margin-bottom: 150px;
  background-color: #FAFBFF;

  .faqs-container {
    padding-inline: 119px;


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
    align-items: center;
  }

  .questions-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 751px;
    row-gap: 15px;
    
  }

  .questions-list-item {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border: 1px solid #cfcfcf;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 25px 0 25px 23px;
    width: 751px;

    h5 {
      margin-right: auto;
      height: 22px;
      font-weight: 800;
      font-size: 22px;
      line-height: 22px;
      margin-right: auto;
    }

    p {
      width: 644px;
      height: 62px;
      font-weight: 500;
      font-size: 16px;
      line-height: 31px;
      letter-spacing: -0.02em;
      margin-top: 23px;
    }

    .icon {
      color: #3D3D3D;
      margin-right: 27px;
      width: 20px;
      height: 20px;
    }
  }

  .questions-list-item-1 {
    margin-right: auto;

    h5 {
      margin-right: 87px;
      display: inline;
    }

    .icon {
      display: inline;
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
`

export default Container
