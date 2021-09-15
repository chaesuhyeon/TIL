import React from 'react';
import InputText from './components/InputText';
import InputTextarea from './components/InputTextarea';
import SelectFlavor from './components/SelectFlavor';
import MultiInput from './components/MultiInput';
import InputTextF from './components/InputTextF';
import InputTextareaF from './components/InputTextareaF';
import SelectFlavorF from './components/SelectFlavorF';
import MultiInputF from './components/MultiInputF';


function App(props) {
  return (
    <div>
    <div>
      <h2>Class Component Form Event Test </h2>
      <InputText/>
      <InputTextarea/>
      <SelectFlavor/>
      <MultiInput/>
    </div>
    <div>
    <h2>Function Component  Form Event Test </h2>
    <InputTextF/>
      <InputTextareaF/>
      <SelectFlavorF/>
      <MultiInputF/>
    </div>
    </div>
  );
}

export default App;
