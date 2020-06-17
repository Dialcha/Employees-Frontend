import React, { useState, useEffect } from "react";
import axios from "axios";

function List() {
  const [data, setData] = useState({});
  const [id, setId] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`http://localhost:8088/employee/list/${id}`);
        setData(result.data);
        setStatus(result.status);
      } catch (e) {
        setStatus(e.status);
      }
    };

    fetchData();
  });

  function handleChange(e) {
    e.target.value === "" ? setId("ninguno") : setId(e.target.value);
  }

  return (
    <section className="section" style={{ marginTop: "1em" }}>
      <h3 class="title is-3">List an employee by their id</h3>
      <input type="number" onChange={handleChange} placeholder="Insert an id"/>
      <div className="container has-text-centered">
        <table className="table">
          <thead>
            <tr>
              <th>
                <abbr title="id">id</abbr>
              </th>
              <th>
                <abbr title="First name">First name</abbr>
              </th>
              <th>
                <abbr title="Last name">Last name</abbr>
              </th>
              <th>
                <abbr title="email">email</abbr>
              </th>
              <th>
                <abbr title="address">address</abbr>
              </th>
              <th>
                <abbr title="salary">salary</abbr>
              </th>
              <th>
                <abbr title="position">position</abbr>
              </th>
              <th>
                <abbr title="office">office</abbr>
              </th>
              <th>
                <abbr title="dependency">dependency</abbr>
              </th>
              <th>
                <abbr title="attachment date">attachment da</abbr>
              </th>
            </tr>
          </thead>
          <tbody>
            {status !== 200 ? (
              "no data found"
            ) : (
              <tr>
                <td>{data.idEmployee}</td>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.email}</td>
                <td>{data.homeAddress}</td>
                <td>{data.baseSalary}</td>
                <td>{data.position}</td>
                <td>{data.office}</td>
                <td>{data.dependency}</td>
                <td>{data.attachmentDate}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default List;
