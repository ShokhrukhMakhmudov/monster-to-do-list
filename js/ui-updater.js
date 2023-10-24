import {
  elTaskCardTemplate,
  elTasks,
  elActions,
  elTaskDescriptionModal,
  elTaskTitle,
  elTaskDescription,
  elTaskCreatedDate,
  elTaskStatus,
  elTaskId,
} from "./html-elements.js";
import statusSwitcher from "./status-switcher.js";
import removeTask from "./remove-task.js";
import tasksData from "./tasks-data.js";
import taskDescriptionGetter from "./task-description-getter.js";
const taskCardTemplateContent = elTaskCardTemplate.content;
const fragment = document.createDocumentFragment();

const { swing } = { swing: "swing" };
const [flex, hidden] = ["flex", "hidden"];

const uiUpdater = (tasks) => {
  elTasks.innerHTML = "";

  if (tasks.length > 0) {
    tasks.forEach((task, index) => {
      const { id, title, status } = task;

      // Selection
      const taskCardClone = taskCardTemplateContent.cloneNode(true);
      const taskCard = taskCardClone.getElementById("taskCard");
      const taskTitle = taskCardClone.getElementById("taskTitle");
      const taskChecker = taskCardClone.querySelector(".js-task-checker");
      const taskCheckerLabel = taskCardClone.getElementById("taskCheckerLabel");
      const taskRemoveButton = taskCardClone.getElementById("taskRemoveButton");

      // Update content
      taskTitle.innerText = title;
      taskTitle.title = taskTitle.innerText;
      taskChecker.id = id;
      taskCheckerLabel.htmlFor = taskChecker.id;
      taskTitle.dataset.id = taskCheckerLabel.htmlFor;

      // Get description
      taskTitle.onclick = ({
        target: {
          dataset: { id: taskId },
        },
      }) => {
        const { title, id, status, createdDate, description } =
          taskDescriptionGetter(taskId);
        elTaskDescriptionModal.showModal();

        elTaskTitle.innerText = title;
        elTaskDescription.innerText = description;
        elTaskCreatedDate.innerText = createdDate;
        elTaskStatus.innerText = status;
        elTaskId.innerText = id;

        // Set to title
        elTaskTitle.title = elTaskTitle.innerText;
        elTaskDescription.title = elTaskDescription.innerText;
        elTaskCreatedDate.title = elTaskCreatedDate.innerText;
        elTaskStatus.title = elTaskStatus.innerText;
        elTaskId.title = elTaskId.innerText;
      };

      // Checker
      taskCheckerLabel.onclick = () => {
        statusSwitcher(taskCheckerLabel.htmlFor);
      };

      // Set checker
      if (status === "completed") taskChecker.checked = true;
      // Remove task
      taskRemoveButton.onclick = () => {
        const result = removeTask(taskCheckerLabel.htmlFor);
        tasksData.length = 0;
        tasksData.push(...result);
        uiUpdater(tasksData);
      };

      // Add animation end of elements
      if (index === tasks.length - 1) {
        taskCard.classList.add(swing);
      }
      fragment.appendChild(taskCard);
    });
    elActions.classList.remove(hidden);
    elActions.classList.add(flex);
  } else {
    elActions.classList.remove(flex);
    elActions.classList.add(hidden);
  }

  // Save to localStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));

  // Add  to parent
  elTasks.appendChild(fragment);
};

export default uiUpdater;
