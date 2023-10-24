const tasksDate = () => {
  const weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
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
  const date = new Date();
  const now = date.toLocaleTimeString().toLowerCase();
  const today = date.getDate();
  const week = weeks[date.getDay()];
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${year} year ${today} ${month} ${week}, ${now}`;
};

export default tasksDate;
