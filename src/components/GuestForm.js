import { useState } from "react";
import { useHistory } from "react-router-dom";

const Form = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [table, setTable] = useState("");
  let history = useHistory();

  const onSubmit = (e) => {
    if (!name) {
      alert("Please enter a name");
      return;
    } else if (!gender) {
      alert("Please enter a gender");
      return;
    } else if (!table) {
      alert("Please enter a table");
      return;
    }

    onAdd({ name, gender, table });

    setName("");
    setTable("");
    setGender("");

    history.push("/");
  };
  return (
    <form className='py-3' onSubmit={onSubmit}>
      <div className='form-group'>
        <label htmlFor='nameInput'>Name</label>
        <input
          type='text'
          className='form-control'
          id='name'
          placeholder='Enter name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='gender'>Gender</label>
        <input
          type='text'
          className='form-control'
          id='gender'
          placeholder='Gender'
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='table'>Table</label>
        <input
          type='text'
          className='form-control'
          id='table'
          value={table}
          placeholder='Table'
          onChange={(e) => setTable(e.target.value)}
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default Form;
