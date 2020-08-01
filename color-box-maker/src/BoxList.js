import React, { useState } from 'react';

function BoxList() {
  const INITIAL_STATE = {
    width: '',
    height: '',
    backgroundColor: '',
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
        <button>Create Box</button>
      </form>
    </div>
  );
}

export default BoxList;
