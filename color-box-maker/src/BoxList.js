import React, { useState } from 'react';
import Box from './Box';
import './BoxList.css'

function BoxList() {
  const INITIAL_STATE = {
    width: '',
    height: '',
    boxBackgroundColor: '',
  }
  const [boxesArr, setBoxesArr] = useState([]);
  const [formData, setFormData] = useState(INITIAL_STATE);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let newBox = {...formData};
    setBoxesArr((oldBoxesArr) => [...oldBoxesArr, newBox]);
    setFormData(INITIAL_STATE);
  }

  return (
    <div className="box-form">
      <h3>Color Boxes!</h3>
      <p>Enter box parameters to generate a box</p>
      <form onSubmit={submitHandler}>
        <label htmlFor="width">Box Width (in pixels):</label>
        <input
          type="number"
          id="width"
          name="width"
          value={formData.width}
          onChange={changeHandler}
        />
        <label htmlFor="height">Box Height (in pixels):</label>
        <input
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={changeHandler}
        />
        <label htmlFor="backgroundColor">Box Background Color(hex code or valid css color name):</label>
        <input
          type="text"
          id="boxBackgroundColor"
          name="boxBackgroundColor"
          value={formData.boxBackgroundColor}
          onChange={changeHandler}
        />
        <button>Create Box</button>
      </form>
      {boxesArr.map( box => <Box width={box.width} height={box.height} boxBackgroundColor={box.boxBackgroundColor} />)}
    </div>
  );
}

export default BoxList;
