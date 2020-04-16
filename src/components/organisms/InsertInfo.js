import React from 'react'
import { InfoConsumer } from './Context'
import TextField from '../molecule/TextField'

const InsertInfo = () => {
  const ref = React.createRef()
  return <InfoConsumer>
    {
      ({data, setData, info, setInfo}) => {
        const onChange = target => {
          const value = {[target.name] : target.value}
          setData(value)
        }
        const onClick = target => {
          ref.current.querySelectorAll('input').forEach(el => el.value = '')
        }
      return <TextField ref={ref} onChange={onChange} onClick={onClick}></TextField>
      }
    }
  </InfoConsumer>
}

export default InsertInfo