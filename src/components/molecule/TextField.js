import React, { useState } from 'react'
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

let id = 0
const TextField = ({setValue}) => {
  const init = {name: '', phone: ''}
  const [data, setData] = useState(init)
  const onChange = ({target}) => setData({...data, [target.name]: target.value})
  const onClick = () => {
    if(data.name === '' || data.phone === '') return
    setData(init)
    typeof setValue === 'function' && setValue({id: id++, ...data})
  }
  return <FieldStyeld>
    <Input type="text" name="name" placeholder="이름" value={data.name} onChange={onChange} />
    <Input type="text" name="phone" placeholder="휴대폰 번호" value={data.phone} onChange={onChange} />
    <Button theme="default" type="submit" onClick={onClick}></Button>
  </FieldStyeld>
}

export default TextField