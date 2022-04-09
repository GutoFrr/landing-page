import styled from 'styled-components'

const Container = styled.div`
  position: relative;

  .icon {
    margin-left: 6px;
    vertical-align: -2px;
    transition: all 0.3s;
  }

  .icon.active {
    transform: rotate(180deg);
  }

  .product-button {
    cursor: pointer;
    width: fit-content;
  }

  .menu {
    opacity: 0;
    position: absolute;
    transition: all 0.2s;
    top: 100px;
  }

  .menu.active {
    opacity: 1;
    visibility: visible;
    top: 27px;
    transition: 0.4s;
  }

  button {
    border: none;
    background: transparent;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #000000;
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding-top: 3px;
    background-color: #dcf2fa;
    border-radius: 10px;
  }

  li {
    text-transform: capitalize;
    padding: 6px;
    margin-bottom: 2px; 
    font-size: 13px;
    border-radius: 10px;
  }

  li:hover {
    background-color: rgba(201, 231, 242, 0.6);
    cursor: default;
  }
`

export default Container
