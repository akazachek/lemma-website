import React from "react";

function Form(props) {
  return (
    <form className="form" method="POST">
      <label>
        Test
        <input type="text" name="test" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
