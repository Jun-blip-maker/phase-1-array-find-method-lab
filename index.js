// code your solution here
let record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
];
function superbowlWin(record) {
  let win = record.find(function (object) {
    return object.result === "W";
  });
  if (win) {
    return win.year;
  } else {
    return undefined;
  }
}

// let Win = record.find((record) => record.result === "W");

// if (Win) {
//   return result.year;
// } else {
//   return undefined;
// }
