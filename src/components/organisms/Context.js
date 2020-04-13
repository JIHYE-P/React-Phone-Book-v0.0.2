import React, { createContext, useState } from 'react'

const Context = createContext()
const {Consumer: InfoConsumer} = Context;

const InfoProvider = props => {
  const [info, setInfo] = useState([])
  const value = {
    info,
    setInfo: data => setInfo(info.concat(data))
  }
  return <Context.Provider value={value} {...props}></Context.Provider>
}

export {
  InfoProvider,
  InfoConsumer
}
