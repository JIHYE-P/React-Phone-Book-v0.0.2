import React, { createContext, useState, useEffect } from 'react'
import { STORAGE_NAME } from '../../util'

const Context = createContext()
const {Consumer: InfoConsumer} = Context;

const InfoProvider = props => {
  const format = {name: '', phone: ''}
  const [data, setData] = useState(format)
  const [info, setInfo] = useState([])
  const value = {
    data,
    setData: value => setData(Object.assign(data, value)),
    info,
    setInfo: value => setInfo(info.concat(value))
  }
  useEffect(() => {
    localStorage.setItem(STORAGE_NAME, JSON.stringify(info))
    setInfo(JSON.parse(localStorage.getItem(STORAGE_NAME) || []))
  }, [])

  return <Context.Provider value={value} {...props}></Context.Provider>
}

export {
  InfoProvider,
  InfoConsumer
}
