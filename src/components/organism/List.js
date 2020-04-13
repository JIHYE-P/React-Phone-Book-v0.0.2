import React from 'react'
import styled from 'styled-components'
import { ListItem } from '../atoms/ListItem'
import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'

const modify = require('../../images/create.svg')
const deleted = require('../../images/delete.svg')
const person = require('../../images/person.svg')
const done = require('../../images/done.svg')

const ListStyled = styled.ul`
  .information {
    padding-left: 40px;
    background: url(${person}) no-repeat left center / 30px auto;
  }
  .control {
    margin-left: auto;
    button {
      width: 50px;
      margin: 0 5px;
      vertical-align: middle;
      &.modify {
        background: url(${modify}) no-repeat center / 22px auto;
      }
      &.delete {
        background: url(${deleted}) no-repeat center / 22px auto;
      }
    }
  }
  input {
    width: 50%;
    margin-left: 10px;
    &:first-child {margin-left: 0}
  }
  .save {
    width: 50px;
    flex: none;
    margin-left: 10px;
    background: url(${done}) no-repeat center / 22px auto;
  }
`

export const List = () => {
  return <ListStyled>
    <ListItem>
      {/* <div className="information">
        <span>홍길동 / 010.1234.5678</span>
      </div>
      <div className="control">
        <Button className="modify"></Button>
        <Button className="delete"></Button>
      </div> */}
    </ListItem>
  </ListStyled>
}

export const default = () => {
  return <>
    <Input type="text" name="name" placeholder="이름" />
    <Input type="text" name="phone" placeholder="휴대폰 번호" />
    <Button theme="default" className="save"></Button>
  </>
}