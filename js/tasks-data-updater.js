import tasksData from "./tasks-data.js";

const checker = (task) => {
  if (
    task instanceof Object &&
    typeof task.id !== undefined &&
    typeof task.createdDate !== undefined &&
    typeof task.description !== undefined &&
    typeof task.title !== undefined &&
    typeof task.status !== undefined
  ) {
    return true;
  } else false;
};

// Tasks updater
const tasksDataUpdater = (task) => {
  const checkerResult = checker(task);
  if (checkerResult) {
    tasksData.push(task);
    return tasksData;
  } else {
    return new Error(
      "A item must be object {} and must be include id, createdDate, description title, status"
    );
  }
};

export default tasksDataUpdater;
