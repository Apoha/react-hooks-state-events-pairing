import React, {useState} from "react";
import Comments from "./Comments";
import ButtonClicks from "./ButtonClicks";




function VideoProfile(props){
 console.log(props.video.comments)

const [userComment, setComment] = useState(props.video.comments)
const [upvotesClick, setUpvotesClick] = useState(parseInt(props.upvotes))
const [downClick, setDownClick] = useState(props.downvotes)


// function handleComments(){

//     setComment(userComment)
// }


function handleUpvoteClicks(){

    setUpvotesClick((upvotesClick) => upvotesClick + 1)
}
 

function handleDownClicks(){

    setDownClick((downClick) => downClick + 1)
}



    return(
        <div className = "Video">
            
       {/* <div className="label">{props.id}</div> */}
       <iframe
        width="919"
        height="525"
        src={props.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
       <div className="text">{props.title}</div> 
       <div className="text">{props.embedUrl}</div> 
       <div className="text">{props.createdAt}</div> 
       {/* <div className="text">{props.upvotes}</div>  */}
       <ButtonClicks vote={upvotesClick}  name="👍"   onVote={handleUpvoteClicks}/>
       {/* <div className="text">{props.downvotes}</div>  */}
       <ButtonClicks vote={downClick}  name="👎" onVote ={handleDownClicks}/>
       {/* <div className="text">{props.comments}</div>   */}
       {props.video.comments.map((eachComment) => <Comments key={eachComment.id}  user= {eachComment.user} comment ={eachComment.comment} />)}

   
   
    </div>
    )
}



export default VideoProfile;

