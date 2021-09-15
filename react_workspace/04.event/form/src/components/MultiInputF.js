import React, { useState } from 'react';

function MultiInputF(props) {

  const [value, setValue] = useState('isGoing : true', 'numberOfGuest : 2' ) // usestate('default값')

  const handleInputChange =(e)=>{
    const target = e.target;
    const value = target.type === 'checkbox'? target.checked : target.value
    const name = target.name
    setValue(
      {
        [name] : value
 
      }
    )
    console.log(target + ":" + name + ":" + value)
  }


  return (
    <div>
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={value.isGoing}
            onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={value.numberOfGuests}
            onChange={handleInputChange} />
        </label>
      </form>
    </div>
  );
}

export default MultiInputF;