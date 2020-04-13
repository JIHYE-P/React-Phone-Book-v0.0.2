import React from 'react'
import styled from 'styled-components'

const LiStyled = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin-top: 20px;
  padding: 15px;
  font-size: 15px;
  text-align: left;
  box-sizing: border-box;
  border-radius: 5px;
  background: #e0e5ec;
  box-shadow:  5px 5px 15px #bec3c9, -5px -5px 15px #ffffff;
`

export const ListItem = props => <LiStyled {...props}></LiStyled>
