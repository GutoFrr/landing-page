import styled from 'styled-components'

const Container = styled.div`
  .icon {
    margin-left: 6px;
    vertical-align: -2px;
  }

  .product-button {
    cursor: pointer;
    width: 72px;
  }

  .menu.active {
    opacity: 1;
    visibility: visible;
  }

  button {
    border: none;
    background: transparent;
    font-family: 'Manrope';
    cursor: pointer;
  }

  ul {
    list-style: none;
    background-color: #FAFBFF;
  }

  li:hover {
    background-color: #dfe4f7;
  }
`

export default Container
