import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  display: inline-block;
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 5px;
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5);
  color: #333;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
  box-shadow: -9px -9px 16px rgb(163,177,198,0.6), 9px 9px 16px rgba(255,255,255, 0.5);
  }
`
export const Button = (props) => <ButtonStyled {...props}></ButtonStyled>