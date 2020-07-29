import styled from 'styled-components';


export const Title = styled.h2`
 text-align: center;
  color: #fff;
`;


export const Container = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 315px;
  text-align: center;
  height:100%;
  width: 85%;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #1974c0;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: #135b97;
      }
    }

     a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
      transition: background 0.2s;
      text-decoration: none;
      &:hover {
        opacity: 1;
      }
    } 
  }
`;