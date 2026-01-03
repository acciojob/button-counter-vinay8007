import { useState } from 'react';

function ButtonCounter(){
  const [count, setCount] = useState(0);
  return(
    <div>
      <p>Button clicked{count}</p>
      <button onClick={()=>setCount(count + 1)}>Click Me</button>
    </div>
  );
}
export default ButtonCounter;
