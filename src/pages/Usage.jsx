import react, { useState, useEffect } from 'react'
import './Usage.css'
function Usage() {
    const [value, setValue] = useState(0)
    const [color, setColor] = useState('white')
    
    useEffect(() => {
        console.log('effect')
        return () => {
            console.log('clean up ');

        }
    }, [])

    return (
        <div className='usage'>
            <div className='usage-item' style={{ background: color }}>
                <button onClick={() => {
                    setValue(value + 1)
                }}>Increment</button>
                <label>{value}</label>
                <button onClick={() => {
                    setValue((state) => {
                        return value - 1
                    })
                }}>Decrement</button>
                <button onClick={() => {
                    setColor((state) => {
                        return 'green'
                    })
                }}>green</button>
                <button onClick={() => {
                    setColor('blue')
                }}>blue</button>
            </div>
        </div>
    )
}
export default Usage