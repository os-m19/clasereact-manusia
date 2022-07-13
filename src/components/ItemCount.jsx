import { useState } from "react";

let stockLimit = 10
const ClickTracker = () => {
    const [count, setCount] = useState(1);

    const registrarClick = (operacion) => {
        if(operacion==="-" && count>1){
            setCount(count-1);
        }else if(operacion==="+" && count<stockLimit){
            setCount(count+1);
        }
    }
    return ( 
        <>
            <button onClick={()=> registrarClick("-")}>-</button>
            {count}
            <button onClick={()=> registrarClick("+")}>+</button>
        </>
     );
}
 
export default ClickTracker;