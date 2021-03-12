import React from 'react'

const UserContext = React.createContext('Nihal shan')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {
    UserConsumer,
    UserProvider
}

export default UserContext