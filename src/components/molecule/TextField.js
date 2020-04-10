import React from 'react'
import styled from 'styled-components'
import { Input } from '../atoms/Input'
import { Button } from '../atoms/Button'

const FieldStyeld = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const TextField = () => {
  return <FieldStyeld>
    <Input type="text" name="name" placeholder="이름" style={{width: '50%'}} />
    <Input type="text" name="phone" placeholder="휴대폰 번호" style={{width: '50%', marginLeft: '10px'}} />
    <Button theme="default" style={{width: '100px', marginLeft: '10px'}}>등록</Button>
  </FieldStyeld>
}