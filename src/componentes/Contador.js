import React, {useState} from "react";  

const Contador = () =>{
        const [contador, setContador] = useState(0);
        const agregar = () => {
            setContador(contador + 1);
          };
          const quitar = () => {
            if(contador === 0){
              return;  
            }
            setContador(contador - 1);
          };

        return <div>


            <p>Agregaste {contador} productos al carrito</p>
            <button onClick= {agregar}>+</button>
            <button onClick= {quitar}>-</button>
        </div>
}

export default Contador;