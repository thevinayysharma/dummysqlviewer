// Toggles Data souce on each Page refresh for Table Compoent

export function toggle(arr) {
  let len = arr.length;
  let val = arr[Math.floor(Math.random() * len)];
  return val;
}

//create dynamic random data toggler
// export function toggle({ data }) {
//   // console.log(arr);
//   let state = -1;
//   let length = data.length;
//   state = (state + 1) % length;
//   return data[state];
// }
