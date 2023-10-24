import tasksData from "./tasks-data";

const [active, completed] = ["active", "completed"];

const tasksActionActive = () => {
  const result = tasksData.filter((task) => task.status === active);
  return result;
};

const tasksActionCompleted = () => {
  const result = tasksData.filter((task) => task.status === completed);
  return result;
};

const tasksActionClearCompleted = () => {
  const result = tasksData.filter((task) => task.status !== completed);
  return result;
};

export { tasksActionActive, tasksActionCompleted, tasksActionClearCompleted };
