import React, { Fragment } from "react";

function Form(props) {
  return (
    <form
      className="flexColumn"
      method="POST"
      encType={
        props.file ? "multipart/form-data" : "application/x-www-form-urlencoded"
      }
    >
      <div className="formContainer flexRow">
        <div className="formColumn flexColumn">
          {props.fields.slice(0, props.fields.length / 2 + 1).map((field) => (
            <Fragment>
              <label for={field.name}>{field.label}</label>
              {field.type != "textarea" ? (
                <input
                  id={field.name}
                  type={field.type}
                  name={field.name}
                  accept={field.type === "file" ? ".doc,.docx,.pdf" : null}
                  required
                />
              ) : (
                <textarea id={field.name} name={field.name} rows={3}></textarea>
              )}
              <input
                type="hidden"
                name="formType"
                value={props.formType}
              ></input>
            </Fragment>
          ))}
        </div>
        <div className="formColumn flexColumn">
          {props.fields.slice(props.fields.length / 2 + 1).map((field) => (
            <Fragment>
              <label for={field.name}>{field.label}</label>
              {field.type != "textarea" ? (
                <input
                  id={field.name}
                  type={field.type}
                  name={field.name}
                  accept={field.type === "file" ? ".doc,.docx,.pdf" : null}
                  required
                />
              ) : (
                <textarea id={field.name} name={field.name} rows={3}></textarea>
              )}
            </Fragment>
          ))}
        </div>
      </div>
      <button type="submit">
        <strong>Submit</strong>
      </button>
    </form>
  );
}

export default Form;
