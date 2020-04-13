import React from 'react'
import styled from 'styled-components'
import { Input } from '../atoms/Input'
import { Button } from '../atoms/Button'


const add = require('../../images/add.svg')

const FieldStyeld = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    width: 50%;
    margin-left: 10px;
    &:first-child {margin-left: 0}
  }
  button {
    width: 50px;
    flex: none;
    margin-left: 10px;
    background: url(${add}) no-repeat center / 30px auto;
  }
`
export const TextField = () => {
  return <FieldStyeld>
    <Input type="text" name="name" placeholder="이름" />
    <Input type="text" name="phone" placeholder="휴대폰 번호" />
    <Button theme="default"></Button>
  </FieldStyeld>
}