import styled from 'styled-components'

const Container = styled.div`
  background-color: #FAFBFF;
  margin-bottom: 150px;

  .cta-container {
    display: flex;
    justify-content: center;
    position: relative;
    
    div {
      text-align: center;
      width: 763px;
      height: 230px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      h1 {
        font-weight: 800;
        font-size: 56px;
        line-height: 61px;
        letter-spacing: -0.03em;
        color: #FFFFFF;
        margin-bottom: 41px;
      }

      button {
        width: 223px;
        height: 67px;
        background: #FF7F5C;
        border-radius: 10px;
        color: white;
        border: none;
        cursor: pointer;
      }
    }
  }
`

export default Container
