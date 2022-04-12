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
    cursor: pointer;
  }

  .list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    width: 322px;
    height: 19px;
  }

  .sign-in-btn {
    border: none;
    background-color: transparent;
    margin-right: 10px;
    padding: 18px 32px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;

    :hover {
      background: #726bc8;
      color: white;
    }

    :active {
      background: #6159c1;
      color: white;
      transition: 0.1s;
    }
  }

  .start-btn {
    border: none;
    color: white;
    background-color: #4f46ba;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    padding: 18px 32px;
    cursor: pointer;
    transition: all 0.3s;

    :hover {
      background: #6159c1;
    }

    :active {
      transition: 0.1s;
      background: #726bc8;
    }
  }
`;

export default Container;
