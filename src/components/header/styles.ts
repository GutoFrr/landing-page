/* eslint-disable quotes */
/* eslint-disable semi */
import styled from "styled-components";

const Container = styled.div`
  background: linear-gradient(292.12deg, #62bada -35.02%, #c9e7f2 78.96%);
  height: 934px;
  position: relative;
  z-index: 4;

  main {
    display: flex;
    flex-direction: column;
    padding: 241px 0px 172px 0px;
  }

  h1 {
    margin-bottom: 22px;
    width: 646px;
    font-style: normal;
    font-weight: 800;
    font-size: 60px;
    line-height: 80px;
    letter-spacing: -0.03em;
  }

  .main-txt {
    width: 510px;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.02em;
    color: #64607d;
    margin-bottom: 53px;
  }

  .start {
    display: flex;
    align-items: center;
    margin-bottom: 56px;
    
    p {
      font-weight: 500;
      font-size: 17px;
      line-height: 30px;
      letter-spacing: -0.02em;
      color: #3734A9;
      cursor: pointer;
    }
  }

  .get-started-btn {
    background: #3734a9;
    border-radius: 47px;
    padding: 15px 38px;
    color: white;
    border: none;
    font-family: Manrope;
    font-size: 16px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: -0.02em;
    text-align: center;
    margin-right: 50px;
    cursor: pointer;
  }

  .play-icon {
    margin-right: 11px;
    cursor: pointer;
  }

  .benefits {
    display: flex;
    color: #3734a9;
  }

  .benefits-txt {
    color: #757095;
    margin-left: 6px;
    margin-right: 24px;
    display: inline;
    vertical-align: 3px;
  }

  .black-hand {
    position: absolute;
    right: 415px;
    top: 146px;
    z-index: 2;
  }

  .white-hand {
    position: absolute;
    right: 256px;
    top: 314px;
    z-index: 1;
  }

  .elipse {
    position: absolute;
    right: 349.02px;
    top: 232.95px;
  }

  .spinning-text {
    position: absolute;
    right: 188.36px;
    top: 71px;
    animation: rotation 35s infinite linear;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  .top-right-scribble {
    position: absolute;
    top: 187px;
    right: .000001%;
  }

  .bottom-left-scribble {
    position: absolute;
    top: 700px;
    left: .000001%;
  }

  .bottom-right-smudge {
    position: absolute;
    top: 718px;
    right: 0.000001%;
  }
`;

export default Container;
