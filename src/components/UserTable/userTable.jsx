import "./usertable.css";
import { formData } from "../../Data/formTable";

export default function UserTable({ count }) {
  return (
    <div className="userTableContainer">
      <div className="usertable">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Id</th>
              <th>Location</th>
              <th>Job</th>
            </tr>
          </thead>

          <tbody>
            {formData.map((value, key) => {
              return (
                <tr key={key}>
                  <td>{value.name}</td>
                  <td>{value.Id}</td>
                  <td>{value.location}</td>
                  <td>{value.Job}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <span className="tableMsg">{count}th Computed SQL Table Response</span>
    </div>
  );
}
