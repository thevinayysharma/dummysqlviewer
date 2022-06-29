import { toggle } from "../utlities/dataToggler";

const table1 = [
  {
    name: "Robert",
    age: 23,
    gender: "Male",
    designation: "engieer(React + Java) Developer"
  },
  { name: "Michal", age: 24, gender: "Male", designation: "youtuber" },
  { name: "Morgan", age: 24, gender: "Female", designation: "React Developer" },
  { name: "Tom", age: 26, gender: "Male", designation: "Front End Developer" },
  { name: "Steve", age: 27, gender: "Female", designation: "UI/UX Designer" },
  { name: "Steve", age: 27, gender: "Female", designation: "UI/UX Designer" },
  { name: "Steve", age: 27, gender: "Female", designation: "UI/UX Designer" },
  { name: "Steve", age: 27, gender: "Female", designation: "UI/UX Designer" }
];

const table2 = [
  { name: "jack", age: 23, gender: "Male", designation: "psyhcologist" },
  { name: "klick", age: 24, gender: "Male", designation: "web dev" },
  { name: "Mtron", age: 24, gender: "Female", designation: "foodies" },
  { name: "atlan", age: 26, gender: "Male", designation: "vlogger" },
  { name: "shruti", age: 27, gender: "Female", designation: "dentist" }
];

const table3 = [
  {
    name: "freeda",
    age: 23,
    gender: "Male",
    designation: "Full Stack(React + Java) Developer"
  },
  {
    name: "Michal",
    age: 24,
    gender: "Male",
    designation: "Full Stack Engineer"
  },
  { name: "Morgan", age: 24, gender: "Female", designation: "React Developer" },
  { name: "Tom", age: 26, gender: "Male", designation: "Front End Developer" },
  { name: "Steve", age: 27, gender: "Female", designation: "UI/UX Designer" }
];

const table4 = [
  { name: "freeda", age: 23, gender: "Male", designation: "astronaut" },
  {
    name: "Michal",
    age: 24,
    gender: "Male",
    designation: "Full Stack Engineer"
  },
  { name: "Morgan", age: 24, gender: "Female", designation: "React Developer" },
  { name: "Tom", age: 26, gender: "Male", designation: "Front End Developer" },
  { name: "Steve", age: 27, gender: "Female", designation: "UI/UX Designer" }
];

const table5 = [
  {
    name: "jack heerington",
    age: 23,
    gender: "Male",
    designation: "astronaut"
  },
  { name: "Michal", age: 24, gender: "Male", designation: "youtuber" },
  { name: "Morgan", age: 24, gender: "Female", designation: "React Developer" },
  { name: "Tom", age: 26, gender: "Male", designation: "writer" },
  { name: "Steve", age: 27, gender: "Female", designation: "UI/UX Designer" }
];

const table6 = [
  { name: "jack heerington", age: 23, gender: "Male", designation: "dentist" },
  { name: "brad", age: 24, gender: "Male", designation: "engieer Engineer" },
  { name: "Morgan", age: 24, gender: "Female", designation: "React Developer" },
  { name: "Tom", age: 26, gender: "Male", designation: "Front End Developer" },
  { name: "Steve", age: 27, gender: "Female", designation: "UI/UX Designer" }
];

const dataArray = [table1, table2, table3, table4, table5, table6];
export const data = toggle(dataArray);
