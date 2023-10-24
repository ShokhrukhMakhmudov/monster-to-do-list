import {
  elAudioAddNewTask,
  elAudioRemoveTask,
  elAudioSelectStatus,
  elAudioThemeChange,
  elClearCompletedButton,
  elNewTaskCreaterForm,
  elNewTaskCreaterInput,
  elTaskDescriptionModal,
  elTasksActive,
  elTasksAll,
  elTasksCompleted,
  elThemeChangerButton,
} from "./html-elements.js";
import taskIdGenerator from "./task-id-generator.js";
import {
  tasksActionActive,
  tasksActionClearCompleted,
  tasksActionCompleted,
} from "./tasks-action.js";
import tasksDataUpdater from "./tasks-data-updater.js";
import tasksData from "./tasks-data.js";
import tasksDate from "./tasks-date.js";
import themeChanger from "./theme-changer.js";
import uiUpdater from "./ui-updater.js";

const [pointerEventsNone] = ["pointer-events-none"];

// Theme Changer
elThemeChangerButton.onclick = () => {
  elAudioThemeChange.play();
  themeChanger();
};

// Update tasks
elNewTaskCreaterForm.onsubmit = (e) => {
  elAudioAddNewTask.play();
  e.preventDefault();
  if (elNewTaskCreaterInput.value.trim() !== "") {
    const task = {
      createdDate: tasksDate(),
      id: taskIdGenerator(),
      title: elNewTaskCreaterInput.value,
      status: "active",
      get description() {
        return `This task created at ${this.createdDate}`;
      },
    };
    const tasks = tasksDataUpdater(task);
    uiUpdater(tasks);
  }
  elNewTaskCreaterInput.value = "";
};

// Actions
elTasksAll.onchange = () => {
  elAudioSelectStatus.play();
  console.log(elTasksAll.checked);
  if (elTasksAll.checked) {
    elClearCompletedButton.classList.remove(pointerEventsNone);
  }
  uiUpdater(tasksData);
};
elTasksActive.onchange = () => {
  elAudioSelectStatus.play();
  elClearCompletedButton.classList.add(pointerEventsNone);
  const result = tasksActionActive(tasksData);
  if (result.length === 0) {
    alert("No data");
    elTasksAll.checked = true;
  } else {
    uiUpdater(result);
  }
};
elTasksCompleted.onchange = () => {
  elAudioSelectStatus.play();
  elClearCompletedButton.classList.add(pointerEventsNone);
  const result = tasksActionCompleted(tasksData);
  if (result.length === 0) {
    alert("No data");
    elTasksAll.checked = true;
  } else {
    uiUpdater(result);
  }
};

// Clear completed
elClearCompletedButton.onclick = () => {
  elAudioRemoveTask.play();
  const result = tasksActionClearCompleted();
  tasksData.length = 0;
  tasksData.push(...result);
  uiUpdater(tasksData);
};

// Close task description modal
elTaskDescriptionModal.onclick = ({ target }) => {
  if (target === elTaskDescriptionModal) elTaskDescriptionModal.close();
};

// Change theme according to localStorage
window.onload = () => {
  elTasksAll.checked = true;
  if (localStorage.getItem("mode") === "dark") themeChanger();
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks.length > 0) {
    tasksData.push(...tasks);
    uiUpdater(tasksData);
  }
};
