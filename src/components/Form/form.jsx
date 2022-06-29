import "./form.css";
import { useState } from "react";
import UserTable from "../UserTable/userTable";

export default function Form() {
  const [value, setValue] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [count, setCount] = useState(0);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log("A query call to db & backend processors generated");
  };

  //count no of times querybtn is pressed for query processing
  const reqCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="userInputForm">
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          placeholder="⌨ Enter your query....;"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={(e) => setValue("")} //sets input form clear for better UX
        />
        <button
          className="showtable"
          onClickCapture={reqCount}
          onClick={(e) => setShowTable(true)}
        >
          Run Query
        </button>
      </form>
      {value.length >= 5 && showTable && <UserTable count={count} />}
    </div>
  );
}
