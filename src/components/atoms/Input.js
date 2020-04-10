import React from 'react'
import styled from 'styled-components'

const InputStyled = styled.input`
  display: inline-block;
  width: 100%;
  padding: 14px 18px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  outline: none;
  &:focus {
    border-color: #aaa;
  }
`
export const Input = props => <InputStyled {...props}></InputStyled>