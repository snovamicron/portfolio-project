import React, { createContext, useState } from 'react'

export const AccontContext = createContext()

const AccountProvider = (porps) => {
    const [accountData, setAccountData] = useState()
    return (
        <AccontContext.Provider value={{
            accountData,
            setAccountData
        }}>
            {porps.children}
        </AccontContext.Provider>
    )
}

export default AccountProvider
