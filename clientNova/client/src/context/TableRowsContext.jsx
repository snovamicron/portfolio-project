import { createContext, useState } from "react";

export const  TableRowsContext = createContext()

const TableRowsContextProvider = ({children})=>{
  const [rows, addRows] = useState({
      params:[0],
      headers:[0]
  })
    return(
        <TableRowsContext.Provider value={{
            rows,
            addRows
        }}>
            {children}
        </TableRowsContext.Provider>
    )
}

export default TableRowsContextProvider