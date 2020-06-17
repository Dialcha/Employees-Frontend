import React, { useState } from "react";
import swal from "sweetalert";
import axios from "axios";

function Increase() {
  const [id, setId] = useState("no");

  function handleChange(e) {
    setId(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    swal("Error", id, "error");

    axios
      .put(`http://localhost:8088/employee/update/increasesalary/${id}`)
      .then((res) => {
        if (res.status === 200) {
          swal(res.data);
        } else if (res.status === 500) {
          swal("Error", "Something did not work on the server", "error");
        } else {
          swal("Error", "Application error", "error");
        }
      })
      .catch((e) => swal("Error", e.message, "error"));
  }

  return (
    <section className="section" style={{ marginTop: "1em" }}>
      <h3 class="title is-3">Increase salary</h3>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div class="field">
            <label class="label">insert id for increase the salary if the employee's seniority is greater than 2 years</label>
            <div class="control">
              <input
                required
                class="input"
                type="number"
                placeholder="id to increase salary"
                onChange={handleChange}
              />
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <input
                type="submit"
                value="Submit"
                onSubmit={handleSubmit}
                class="button is-link"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Increase;