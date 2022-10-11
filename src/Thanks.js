import { useState } from "react";
import { ReactComponent as Thank } from "./images/thanks.svg";


function Thanks(props) {
 

 
  return (
    
    <div className="second-page">
      <div className="inside-page">
     
      <Thank/>
      <div className="info">
      <h2>You selected {props.point} out of 5</h2>
      </div>
      <h1>Thank you!</h1>
      <p className="text">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      
      </div>
    </div>
    
  );
}

export default Thanks;
