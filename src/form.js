import React, {useState} from 'react';

function Form() {
    const initialValues = {name: "", age: "", occupation: ""};
    const [input, setInput] = useState(initialValues);
    function handleSubmit(e) {
        e.preventDefault();
        console.log("You clicked submit.");
        console.log(e);
        console.log(input);
        console.log("the name", input.name);
    }
    function handleChange(e) {
        setInput((copy) =>({
          ...copy,
          [e.target.name]: e.target.value,
        }));
        // setInput(e.target.value);
        console.log("target value", e.target.value);
        console.log("state input", input);
    }
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name='name'
            placeholder='Type Something'
            value={input.name}
            onChange={handleChange}
            />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="text"
            name='age'
            placeholder='Type Something'
            value={input.age}
            onChange={handleChange}
            />
        </div>
        <div>
          <label>occupation:</label>
          <input
            type="text"
            name='occupation'
            placeholder='Type Something'
            value={input.occupation}
            onChange={handleChange}
            />
        </div>
        
            <button type='submit'>Submit</button>
            <div>
              <p>{input.name}</p>
              <p>{input.age}</p>
              <p>{input.occupation}</p>
            </div>
      </form>
    </div>
  );
}

export default Form

// onChange -monitors changes in our input field.
// value  -the content of our input field.
// state(input, setInput) track changes and save the changes
// e.target.value -getting what is being typed.