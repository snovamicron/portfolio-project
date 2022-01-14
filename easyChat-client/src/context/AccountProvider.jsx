import React, { createContext, useState } from 'react'

export const AccountContext = createContext()

const AccountProvider = (porps) => {
    const [accountData, setAccountData] = useState()
    return (
        <AccountContext.Provider value={{
            accountData,
            setAccountData
        }}>
            {porps.children}
        </AccountContext.Provider>
    )
}

export default AccountProvider
