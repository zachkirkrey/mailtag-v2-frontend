var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const d = new Date();
const getCurrentMonth = months[d.getMonth()];
const getCurrentDay = d.getDate();
const getTheLoopOfDates = () => {
  let element = [];
  for (let index = 1; index <= getCurrentDay; index++) {
    element.push(index);
  }
  return element;
};
export { getCurrentDay, getCurrentMonth, getTheLoopOfDates };

