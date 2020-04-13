import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  display: inline-block;
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 5px;
  background-color: #e0e5ec;
  box-shadow:  5px 5px 15px #bec3c9, -5px -5px 15px #ffffff;
  color: #333;
  outline: none;
  cursor: pointer;
`
export const Button = (props) => <ButtonStyled {...props}></ButtonStyled>