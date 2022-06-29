import "./dropdown.css";
import { useState } from "react";
import { data } from "../../Data/datamaker";
import Table from "../../components/Table/table";

export default function Dropdown() {
  //use of usestate mechanism to check which dropdown query button is pressed
  const [clickedBtn1, setclickedBtn1] = useState(false);
  const [clickedBtn2, setclickedBtn2] = useState(false);
  const [clickedBtn3, setclickedBtn3] = useState(false);

  return (
    <div className="dropdown">
      <p>Look, what's in our query store !!!</p> <br />
      <button className="dropdown__btn">Select Queries</button>
      <div className="dropdown__content">
        <button
          onClick={(e) => setclickedBtn1(true)}
          onMouseOver={(e) => setclickedBtn1(false)}
          className="dropdown__btn-item"
        >
          Select * From Table1
        </button>
        {clickedBtn1 && <Table data={data} />}
        <button
          onClick={(e) => setclickedBtn2(true)}
          onMouseOver={(e) => setclickedBtn2(false)}
          className="dropdown__btn-item"
        >
          Select id From Table2
        </button>
        {clickedBtn2 && <Table data={data} />}
        <button
          onClick={(e) => setclickedBtn3(true)}
          onMouseOver={(e) => setclickedBtn3(false)}
          className="dropdown__btn-item"
        >
          Select id, product From Table 3
        </button>
        {clickedBtn3 && <Table data={data} />}
      </div>
    </div>
  );
}
