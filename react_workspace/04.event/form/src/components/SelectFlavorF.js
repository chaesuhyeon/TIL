import React,{useState} from 'react';

function SelectFlavorF(props) {
  const [value, setValue] = useState('coconut') // usestate('default값')

  const handleChange = (e) => {
    setValue(e.target.value);
  }

 const handleSubmit = (e) =>{
  alert("An essay was submitted :" + value);
  e.preventDefault();
} 
  return (
    <div>
          <form onSubmit={handleSubmit}>
            <label>
              Pick your favorite flavor:
              <select value={value} onChange={handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
    </div>
  );
}

export default SelectFlavorF;