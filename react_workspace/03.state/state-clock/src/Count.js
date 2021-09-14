import React, { useState } from 'react';


function Count(props) {
  //function hook : useState사용
  const [count,setCount] = useState(0) // 초기값 셋팅


  return (
    <div>
      <p><h3>You clicked {count} times</h3> </p>
      <button  onClick={()=>setCount(count+1)}>Click me</button>
    </div>
  );
}

export default Count;
