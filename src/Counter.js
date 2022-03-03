import { useState } from 'react';

function Counter(props) {
// the first thing is a getter, or the state, the second is a setter
// or a function to set the state
// and the argument for the usestate function is the intial value
  const [count, setCount] = useState(0)
  const {title, color, extra} = props
  return (
    //   this is a fragment
    <>
      <h1>{ title ? title : 'Default Counter'}</h1>
      <p style={{color:color, fontSize:'20px'}}>{count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Subtract</button>
      {/* Short curcuit evaluation if 'extra' is null nothing happens*/}
      {extra && <p>extra value {extra}</p>}
    </>

  );
}

export default Counter;
