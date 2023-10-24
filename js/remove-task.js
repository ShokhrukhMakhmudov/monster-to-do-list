import { elAudioRemoveTask } from "./html-elements.js";
import tasksData from "./tasks-data.js";

const removeTask = (id) => {
  elAudioRemoveTask.play();
  const result = tasksData.filter((task) => task.id !== id);
  return result;
};

export default removeTask;
