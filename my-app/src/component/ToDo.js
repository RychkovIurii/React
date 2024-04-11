import React, { useState } from 'react'
import StudentData from './StudentData';

export default function ToDo() {
													/* useState */
	const [name, setName] = useState("student1");
	const [id, setId] = useState("");
	function AnyFunc(any){
		setName(any.target.value);
	}

													/* Add to the list*/
	const [list,setList] = useState([]);
	function addStudentInfo(){
		setList([...list, {name: name, id: id}]);
	}

  return (
	<div>
		<h1>Simple ToDo list project</h1>
		<input type='text' placeholder='Enter Student name' onChange={AnyFunc}/><br/>
		<input type='number' placeholder='Enter Student ID' onChange={(e) => {
			setId(e.target.value)
		}}/><br/>	
		<button onClick={addStudentInfo}>Add info</button>
		<div>
			{list.map((value) => {
				return <h1> <StudentData name = {value.name} id = {value.id} /></h1>
				})}
		</div>

												{/* useState */}
		<input type='text' placeholder='Enter Student name' onChange={(e) =>{
			setName(e.target.value);
		}}/><br/>
		<input type='text' placeholder='Enter Student name' onChange={(anyName) =>{
			setName(anyName.target.value);
		}}/><br/>
		<input type='text' placeholder='Enter Student name' onChange={AnyFunc}/><br/>	
		<h1>{name}</h1>
	</div>
  )
}
