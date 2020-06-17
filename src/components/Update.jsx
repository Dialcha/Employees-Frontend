import React, { useState } from "react";
import FormField from "./FormField";
import axios from "axios";
import swal from "sweetalert";

function Update({ dataForm }) {

    const [id, setId] = useState("no");

  function handleInputChange(e) {
    setId(e.target.value);
  }

  const [values, setValues] = useState({
    attachmentDate: "",
    baseSalary: 0,
    dependency: "",
    email: "",
    firstName: "",
    homeAddress: "",
    lastName: "",
    office: "",
    position: "",
  });

  const data = dataForm;

  const form = data.map((field) => {
    return (
      <div className="container">
        <FormField
          text={field.text}
          helpText={field.helpText}
          iconText={field.iconText}
          name={field.name}
          placeholder={field.placeholder}
          handleChange={handleChange}
          type={field.type}
        />
      </div>
    );
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const options = {
      headers: { "content-type": "application/json" },
    };

    axios
      .put(`http://localhost:8088/employee/update/${id}`, values)
      .then((res) => {
        if(res.status === 200) {
          swal("Ok", "Employee modified correctly", "success")
        } else if(res.status === 500) {
          swal("Error", "Something did not work on the server", "error")
        } else {
          swal("Error", "Application error", "error")
        }
      }).catch(e => swal("Error", e.message, "error"));
  }

  return (
    <section className="section" style={{ marginTop: "1em" }}>
      <h3 class="title is-3">Update an employee</h3>
      <div className="container">
      <input
                required
                class="input"
                type="number"
                placeholder="id to be modified"
                onChange={handleInputChange}
              />
              <hr/>
        <form onSubmit={handleSubmit}>
          <div className="container">
            {form}
            <div className="field is-grouped is-grouped-centered">
              <div className="control">
                <hr/>
                <input
                  type="submit"
                  value="Submit"
                  className="button is-link center"
                  onSubmit={handleSubmit}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Update;