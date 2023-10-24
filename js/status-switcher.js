import { elAudioCheck } from "./html-elements.js";
import tasksData from "./tasks-data.js";
const statusSwitcher = (taskId) => {
  elAudioCheck.play();
  const [completed, active] = ["completed", "active"];
  tasksData.forEach((task) => {
    const { id, status } = task;
    if (taskId === id) {
      if (status === completed) task.status = active;
      else task.status = completed;
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasksData));
};
export default statusSwitcher;
