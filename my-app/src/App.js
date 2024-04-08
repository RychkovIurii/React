import React, { useState } from 'react';

import './App.css';
/* import Second from './component/Second'; */
import Header from './component/Header';
import ObjectFile from './component/ObjectFile';
import LikesCounter from './component/LikesCounter';

function App() {

  

  const [counter, setCounter] = useState(0);
  const [like, setLike] = useState(0);
  function change ()
  {
    setLike(like + 1);
  }

  const name = "Juri";
  const x = 5;
  const y = 2;
  const our_array = [2, 3, 4, 5, 6];

  return (
    <div className="App">

      <LikesCounter/>

      <h4>You click {counter} times.</h4>
      <button onClick = {()=>{
        setCounter(counter + 1);
      }}>
        Press
      </button>

      <h4>We have {like} LIKES.</h4>
      <button onClick = {change}> Like </button>

      <ObjectFile />

{/*       <h1>Hello {name}!</h1> */}
      <Header name = "Ibrahim" grade = "3" array = {our_array} /> {/* My name is Ibrahim. Grade is 3. First element of array is 2 */}
      <Header name = "Jussi" grade = {x} array = {our_array} /> {/* My name is Jussi. Grade is 5. First element of array is 2 */}
      <Header name = {name} grade = {y} array = {our_array} />  {/* My name is Juri. Grade is 2. First element of array is 2 */}
      <Header name = "John" grade = "4" array = {our_array} />  {/* My name is John. Grade is 4. First element of array is 2 */}
      <Header array = {our_array} />      {/*   My name is . Grade is . First element of array is 2 */}
{/*       <Second/>
      <ul>
        <li><h5>x = {x}; y = {y}</h5></li>
        <li><h5>x + y = {x + y}</h5></li>
      </ul> */}

    </div>
  );
}

export default App;
