import { useState } from 'react'
import './contador.css';

export default function contador(){
    const [numero, setNumero] = useState(0)

    function incrementar(){
        setNumero(numero + 1)
    }

    function decrementar(){
        setNumero(numero - 1 )
    }

    function zerar(){
        setNumero(0)
    }

    return(
            <div className='box'>
                {<span>{numero}</span>}
                <div className='botoes'>
                    <button className='botao' onClick={decrementar}>-</button>
                    <button onClick={zerar}>reset</button> 
                    <button className='botao' onClick={incrementar}>+</button>
                </div>  
            </div>
    )
}