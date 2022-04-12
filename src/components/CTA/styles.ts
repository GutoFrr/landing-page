import styled from 'styled-components'

const Container = styled.div`
  background-color: #fafbff;
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
        color: #ffffff;
        margin-bottom: 41px;
      }

      button {
        width: 223px;
        height: 67px;
        background: #ff7f5c;
        border-radius: 10px;
        color: white;
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
      }
    }
  }
`

export default Container
