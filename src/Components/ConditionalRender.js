import React, { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(false);

    const [name, setName] = useState("Jão")

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>se x for true, sim</p>}
        {!x && <p>Agora x é falso</p>}
        <h1>If Ternário</h1>
        {name === "Jão" ? (
            <div>
                <p>O nome é Jão</p>
            </div>    
        ) : (
            <div>
                <p>Nome não existe</p>
            </div>
        )}
        <button onClick={() => setName("Paulo")}>Clica aqui!</button>
    </div>
  )
}

export default ConditionalRender