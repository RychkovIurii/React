import React, { useState } from 'react'
import { FaRegThumbsUp } from "react-icons/fa6";

export default function LikesCounter() {
	const [countLike, setCountLike] = useState(0);

  return (
	<div>
		{countLike}
		<button onClick={()=>{
        setCountLike(countLike + 1);
      	}}>
		<FaRegThumbsUp id='ThumbsUp'/>
      	</button>
	</div>
  )
}
