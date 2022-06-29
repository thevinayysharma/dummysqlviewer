import "./table.css";
import React, { useMemo } from "react";
export default function Table({ data }) {
  return useMemo(
    () => (
      <div className="tableContainer">
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Designation</th>
              </tr>
            </thead>

            <tbody>
              {data.map((value, key) => {
                return (
                  <tr key={key}>
                    <td>{value.name}</td>
                    <td>{value.age}</td>
                    <td>{value.gender}</td>
                    <td>{value.designation}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <span className="tableMsg">Computed SQL Table</span>
      </div>
    ),
    [data]
  );
}
