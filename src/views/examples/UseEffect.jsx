import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(n) {
    if (n < 0) return -1
    if (n == 0) return 1
    return calcFatorial(n - 1) * n
}

function parOuImpar(num1) {
    if (num1 % 2 === 0) {
        return 'Par'
    } if (num1 % 2 === 1) {
        return 'Ímpar'
    }
}

const UseEffect = (props) => {

    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [num1, setNum1] = useState(0)
    const [status, setStatus] = useState(' Não Calculado')

    useEffect(function () {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function () {
        setStatus(parOuImpar(num1))
    }, [num1])

    return (
        <div className="UseEffect">

            <PageTitle title="Hook UseEffect" subtitle="Permite executar efeitos colaterais em componentes funcionais!" />

            <SectionTitle title="Exercício#1" />
            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red">{fatorial === -1 ? 'Não Existe' : fatorial}</span>
                </div>
                <input type="number" className="input" value={number} onChange={(e) => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercício#2" />

            <div className="center">
                <div>
                    <span className="text">Status:</span>
                    <span className="text red">{status}</span>
                </div>
                <input type="number" className="input" value={num1} onChange={(e) => setNum1(e.target.value)} />
            </div>
        </div>
    )
}

export default UseEffect
