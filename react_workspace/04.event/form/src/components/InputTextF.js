import React, { useState } from 'react';

function InputTextF(props) {
  const [value, setValue] = useState('') // usestate('default값')

  const handleChange = (e) => {
    setValue(e.target.value);
  }

 const handleSubmit = (e) =>{
  alert("Text  Input name : " + value);
  e.preventDefault();
}

  return (
    <div>
       <form onSubmit={handleSubmit}>
          <label>
            Name :
          </label>
          <input type="text" value={value} onChange={handleChange} ></input>
          <input type="submit" value="Submit" ></input>
        </form>
    </div>
  );
}

export default InputTextF;