import React from 'react'
import SubObj from './SubObj'

export default function ObjectFile() {

	const Object1 = [
		{id: 1, name: "Student1", bill: 1000},
		{id: 2, name: "Student2", bill: 2000},
		{id: 3, name: "Student3", bill: 3000}
	]
  return (
	<div>
      {Object1.map(obj => (
        <SubObj key={obj.id} id={obj.id} name={obj.name} bill={obj.bill}/>
      ))}
    </div>
  )
}
