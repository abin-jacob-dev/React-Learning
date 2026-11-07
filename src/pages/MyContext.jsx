import React from 'react'

const MyProvider = React.createContext()
const MyNewContext = React.createContext(500)

export {
    MyProvider,
    MyNewContext
}