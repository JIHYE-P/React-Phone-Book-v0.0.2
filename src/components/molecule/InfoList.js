import React from 'react'
import styled from 'styled-components'
import { ListItem } from '../atoms/ListItem'
import { ListStyled } from '../atoms/List'
import { Button } from '../atoms/Button'

const modify = require('../../images/create.svg')
const deleted = require('../../images/delete.svg')
const person = require('../../images/person.svg')

const InfoListStyled = styled(ListStyled)`
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
`
const InfoList = ({name, phone, onDelete}) => {
  return <InfoListStyled>
    <ListItem>
      <div className="information">
        <span>{name} / {phone}</span>
      </div>
      <div className="control">
        <Button className="delete" onClick={onDelete}></Button>
      </div>
    </ListItem>
  </InfoListStyled>
}

export default InfoList