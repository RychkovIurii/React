import React from "react";
import SubFile from "./SubFile";


export default function Header(props){
	return (
		<div>
			<SubFile name2 = {props.name}/>
			<h1>Name is {props.name}. Grade is {props.grade}. 1st element of array is {props.array[0]}.</h1>
		</div>
	)
}