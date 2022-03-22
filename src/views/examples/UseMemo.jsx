import React, { useMemo, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseMemo = (props) => {

    const [num1, setNum1] = useState(null)
    const [num2, setNum2] = useState(null)
    const [num3, setNum3] = useState(null)

    function soma(num1,num2){
        const future = Date.now() + 2000
        while(Date.now() < future){}
        return num1 + num2
    }

    const result = useMemo(() => soma(num1, num2), [num1, num2])

    return (


        
        <div className="UseMemo">
            <PageTitle title="Hook UseMemo" subtitle="Retorna um valor memoizado!" />

            <SectionTitle title="Exercicio#1" />
            <div className="center">
                <input type="number" className="text" value={num1} onChange={(e) => setNum1(parseInt(e.target.value))} />
                <input type="number" className="text" value={num2} onChange={(e) => setNum2(parseInt(e.target.value))} />
                <input type="number" className="text" value={num3} onChange={(e) => setNum3(parseInt(e.target.value))} />
                <span className="text red">{result}</span>
            </div>
        </div>


    )
}

export default UseMemo
