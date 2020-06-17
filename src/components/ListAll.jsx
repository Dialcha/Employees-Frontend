import React, { useState, useEffect } from "react";
import axios from "axios";

function List() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8088/employee/listAll");
      setData(result.data);
      console.log(result.data);
    };

    fetchData();
  }, []);

  const listElements = data.map((element) => {
    return (
      <tr>
        <td>{element.idEmployee}</td>
        <td>{element.firstName}</td>
        <td>{element.lastName}</td>
        <td>{element.email}</td>
        <td>{element.homeAddress}</td>
        <td>{element.baseSalary}</td>
        <td>{element.position}</td>
        <td>{element.office}</td>
        <td>{element.dependency}</td>
        <td>{element.attachmentDate}</td>
      </tr>
    );
  });

  return (
    <section className="section" style={{ marginTop: "1em" }}>
      <h3 class="title is-3">List all the employees</h3>
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
                <abbr title="attachment date">attachment date</abbr>
              </th>
            </tr>
          </thead>
          <tbody>{listElements}</tbody>
        </table>
      </div>
    </section>
  );
}

export default List;