import React from 'react'
import { InfoConsumer } from './Context'
import TextField from '../molecule/TextField'

const InsertInfo = props => {
  return <InfoConsumer>
    {
      // onClick, onChange
      ({info, setInfo}) => {
        const onChange = target => {
        
        }
        return <TextField onChange={onChange}></TextField>
      }
    }
  </InfoConsumer>
}

export default InsertInfo