import React, { createContext, useState } from 'react'
import TextField from '../molecule/TextField'
import InfoList from '../molecule/InfoList'

const Context = createContext()

export const InfoProvider = props => {
  const [info, setInfo] = useState([])
  const value = {
    info, 
    setInfo: value => setInfo(info.concat(value)), 
    setDeleted: id => setInfo(info.filter(info => info.id !== id)),
  }
  return <Context.Provider value={value} {...props}></Context.Provider>
}

export const InsertPhoneBook = () => {
  return <Context.Consumer>
    {
      ({info, setInfo, setDeleted}) => {
        const setValue = data => setInfo(data)
        const onDelete = id => setDeleted(id)
        return <>
          <TextField setValue={setValue} value={info}></TextField>
          {
            info.map(({name, phone, id}, index) => (
              <InfoList
                key={index}
                name={name}
                phone={phone}
                onDelete={() => onDelete(id)} />
            ))
          }
        </>
      }
    }
  </Context.Consumer>
}
