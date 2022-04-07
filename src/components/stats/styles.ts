import styled from 'styled-components'

const Container = styled.div`
  height: 256px;
  background: #3734a9;

  .stats-container {
    display: flex;
    align-items: center;

    hr {
      transform: rotate(0deg);
      height: 256px;
      border: 1px solid #3d3d3d;
      align-self: flex-start;
    }
  }

  .stats-phrase {
    width: 143px;
    height: 93px;
    font-weight: 400;
    font-size: 19px;
    line-height: 31px;
    letter-spacing: -0.02em;
    color: #ffffff;
    margin-left: 149px;
    margin-right: 29px;
  }

  h1 {
    font-weight: 800;
    font-size: 72px;
    line-height: 72px;
    letter-spacing: -0.02em;
    color: #ffffff;
    margin-bottom: 21px;
  }

  h5 {
    font-weight: 300;
    font-size: 25px;
    line-height: 31px;
    letter-spacing: -0.02em;
    color: #ffffff;
    display: inline;
  }

  .stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .icon { 
    color: #b1ca16;
    margin-right: 10px;
    width: 26px;
    height: 26px;
    vertical-align: sub;
  }

  .stats-users {
    width: 203px;
    height: 124px;
    margin-left: 65px;

    .active-users {
      width: 203px;
      height: 31px;
    }
  }

  .stats-reviews {
    width: 250px;
    height: 124px;

    .star-reviews {
      width: 250px;
      height: 31px;
    }
  }

  .stats-transactions {
    width: 230px;
    height: 124px;

    .transactions {
      width: 210px;
      height: 31px;
    }
  }
`

export default Container
