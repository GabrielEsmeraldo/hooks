import SectionTitle from '../../components/layout/SectionTitle'
import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseState = (props) => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('Digite seu nome...')

    return (
        <div className="UseState">

            <PageTitle title="Hook UseState" subtitle="Estado em componentes funcionais!" />
            <SectionTitle title="Exercício#1" />

            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => setCount(count + 1)}>+1</button>
                    <button className="btn" onClick={() => setCount(count - 1)}>-1</button>
                    <button className="btn" onClick={() => setCount(count + 20)}>+20</button>
                    <button className="btn" onClick={() => setCount(count - 20)}>-20</button>
                    <button className="btn" onClick={() => setCount(0)}>Limpar</button>
                </div>
            </div>

            <SectionTitle title="Exercício#2" />
            <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)}/>
            <span className="imput">{name}</span>

        </div>
    )
}

export default UseState
