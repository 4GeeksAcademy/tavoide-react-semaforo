import React, {useState} from "react";
import './Semaforo.css'

function Semaforo() {
   const [color, setColor]=useState{red};
    return (
      <div className="semaforo">
     <div onClick={()=> setColor(color)}
     className={color === "red"? "red light" : "light"}
     ></div>
      
     <div onClick={()=> setColor(color)}
     className={color === "red"? "red light" : "light"}
     ></div>

     <div onClick={()=> setColor(color)}
     className={color === "red"? "red light" : "light"}
     ></div>
     </div>
    );
};



export default Semaforo;