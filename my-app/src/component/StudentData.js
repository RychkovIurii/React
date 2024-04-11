import React from 'react'

export default function StudentData(props) {
  return (
	<div>
		<h3>Student name is {props.name}. ID is {props.id}</h3>
	</div>
  )
}
