import { useState } from 'react'

const Money = () => {
    const [stand, standAdd] = useState(0)
    const [stand1, standAdd1] = useState(0)

    return (
        <section className='konto'>
            <h2 className='headline'>Dein Konto</h2>
            <div className='saldo'>{stand1}</div>
            <input className='geldbetrag' value={stand} onChange={(e) => { standAdd(e.target.value) }} type="Number" />
            <div>
                <button className='einzahlen' onClick={(e) => { standAdd1((prev) => prev + Number(stand)); standAdd(0) }}> Einzahlen</button >
                <button className='auszahlen' onClick={(e) => { standAdd1((prev) => prev - Number(stand)); standAdd(0) }}>Auszahlen</button>
            </div>

        </section>
    )
}

export default Money