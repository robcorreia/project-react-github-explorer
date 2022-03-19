/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  max-width: 480px;
  margin-top: 80px;
  font-size: 48px;
  line-height: 56px;
  color: #3a3a3a;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #ffffff;

    ${props =>
    props.hasError &&
    css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #78e08f;
    border: 0;
    border-radius: 0 5px 5px 0;
    color: #ffffff;
    font-weight: bold;
    transition: background 300ms;

    &:hover {
      background: ${shade(0.2, '#78e08f')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  width: 100%;
  max-width: 700px;

  a {
    display: block;
    width: 100%;
    padding: 24px;
    background: #ffffff;
    border-radius: 5px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 300ms;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  div {
    margin: 0 16px;
    flex: 1;

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }
  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
`;
