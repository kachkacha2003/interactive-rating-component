import { ReactComponent as ReactLogo } from "./images/icon-star.svg";

import { useState } from "react";
import Thanks from "./Thanks";
function App() {
  const [Color, setColor] = useState(0);
  const[display,setDisplay]=useState("none")

 
  return (
    <div className="container">
     {display==="none" ? 
     <div className="inside-container">
     <div className="star">
       <ReactLogo />
     </div>

     <h1>How did we do?</h1>
     <p>
       Please let us know how we did with your support request. All feedback
       is appreciated to help us improve our offering!
     </p>
     <div className="point">
       <div
         className={`select-point ${Color===1 ? "clicked" : null}`}
         onClick={() =>setColor(1) }
       >
         1
       </div>
       <div
         className={`select-point ${Color===2 ? "clicked" : null}`}
         onClick={() => setColor(2) }
       >
         2
       </div>
       <div
         className={`select-point ${Color===3 ? "clicked" : null}`}
         onClick={() => setColor(3) }
       >
         3
       </div>
       <div
         className={`select-point ${Color===4 ? "clicked" : null}`}
         onClick={() => setColor(4) }
       >
         4
       </div>
       <div
         className={`select-point ${Color===5 ? "clicked" : null}`}
         onClick={() => setColor(5) }
       >
         5
       </div>
     </div>
     <button onClick={()=>Color!==0?  setDisplay("block") : null}>SUBMIT</button>
   </div>
   :null
     
     
    }
      
      { display==="block"?<Thanks point={Color}/> : null}
    </div>
  );
}

export default App;
