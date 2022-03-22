import React from "react"

export const data = {
    nome: 'Gabriel',
    sobrenome: 'Esmeraldo'
}

const DataContext = React.createContext(data)

export default DataContext