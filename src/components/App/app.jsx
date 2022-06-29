import React from "react";
import "./app.css";
import Dropdown from "../Dropdown/dropdown";
import Table from "../Table/table";
import { data } from "../../Data/datamaker";
import Form from "../Form/form";

export default function App() {
  return (
    <div className="App">
      <h1>SQL VIEWER</h1>
      <h4 className="subtitle">
        Visualize Sql queries on the go.{" "}
        <span role="img" aria-label="rocket emoji">
          🚀
        </span>
      </h4>
      <Table data={data} />
      <div className="flexContainer">
        <Dropdown />
        <p className="writebelowformMsg">
          Wanna... Experiment ? <br /> Type your SQL Query below... ⬇️
        </p>
        <Form />
      </div>
    </div>
  );
}
