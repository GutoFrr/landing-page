/* eslint-disable quotes */
/* eslint-disable semi */
import styled from "styled-components";

const Container = styled.div`
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 38px;
    height: 52px;
  }

  h3 {
    font-weight: 700;
    font-size: 20px;
  }

  .list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    width: 322px;
    height: 19px;
  }

  .nav-btns {
    border: none;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
  }

  .sign-in-btn {
    border: none;
    background-color: transparent;
    margin-right: 50px;
    cursor: pointer;
  }

  .start-btn {
    border: none;
    color: white;
    background-color: #4f46ba;
    padding: 18px 32px;
    cursor: pointer;
  }
`;

export default Container;
