import React from 'react'
import styled from 'styled-components'
import { ListStyled } from '../atoms/List'
import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'
import { ListItem } from '../atoms/ListItem'

const done = require('../../images/done.svg')

const ModifyFieldStyled = styled(ListStyled)`
  input {
    width: 50%;
    margin-left: 10px;
    &:first-child {margin-left: 0}
  }
  Button {
    width: 50px;
    flex: none;
    margin-left: 10px;
    background: url(${done}) no-repeat center / 22px auto;
  }
`

export const ModifyField = () => {
  return <ModifyFieldStyled>
    <ListItem>
      <Input type="text" name="name" placeholder="이름" />
      <Input type="text" name="phone" placeholder="휴대폰 번호" />
      <Button theme="default" className="save"></Button>
    </ListItem>
  </ModifyFieldStyled>
}