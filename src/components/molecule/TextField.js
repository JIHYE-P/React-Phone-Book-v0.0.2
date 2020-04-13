import React from 'react'
import styled from 'styled-components'
import { Input } from '../atoms/Input'
import { Button } from '../atoms/Button'

const add = require('../../images/add.svg')
const FieldStyeld = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255,255,255,0.25);
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
const TextField = ({onClick, onChange}) => {
  return <FieldStyeld>
    <Input type="text" name="name" placeholder="이름" onChange={({target}) => onChange(target)} />
    <Input type="text" name="phone" placeholder="휴대폰 번호" onChange={({target}) => onChange(target)} />
    <Button theme="default" onClick={onClick}></Button>
  </FieldStyeld>
}

export default TextField