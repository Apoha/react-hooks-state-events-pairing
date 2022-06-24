import React from "react";




function ButtonClicks(props){



return (

<div className = "button">
   
   <button className ='upAndDownClick' onClick={props.onVote}>{props.vote} {props.name}</button>
   
   
</div>
)


}





export default ButtonClicks;