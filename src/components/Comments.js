import React from "react";


function Comments(props){

return <div>

<div className="text">{props.user}</div> 
<div className="text">{props.comment}</div> 

</div>


}


export default Comments;