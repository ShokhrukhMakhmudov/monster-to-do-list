import tasksData from "./tasks-data.js";

const taskDescriptionGetter = (id) => {
  const result = tasksData.find((task) => task.id === id);
  return result;
};

export default taskDescriptionGetter;
