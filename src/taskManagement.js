import { AddTaskItem, EditTaskItem } from "./data";
import { Task } from "./tasks";
import { Render } from ".";

const priorityLevels = ['Low', 'Medium', 'High'];

export function AddTaskItemModal(itemToEdit = null) {
    const addTaskItemDialog = document.createElement('dialog');
    addTaskItemDialog.id = "add-dialog";

    const addTaskItemForm = document.createElement('form');
    addTaskItemForm.classList.add('add-form');
    addTaskItemDialog.appendChild(addTaskItemForm);

    addTaskItemForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let formEntries = Object.fromEntries(formData);
        if (itemToEdit == null){
            AddTaskItem(new Task(formEntries['title'], formEntries['description'], formEntries['duedate'], formEntries['priority'], 'Backlog'));
        }
        else {
            EditTaskItem(itemToEdit, formEntries);
        }
        Render();
        addTaskItemDialog.close();
    });

    //Title
    const taskItemTitleContainer = document.createElement('div');
    taskItemTitleContainer.classList.add('add-title-container');

    const taskItemTitleLabel = document.createElement('label');
    taskItemTitleLabel.classList.add('add-title-label');
    taskItemTitleLabel.textContent = "Title: "
    taskItemTitleLabel.setAttribute('for', 'title');
    taskItemTitleContainer.appendChild(taskItemTitleLabel);

    const taskItemTitle = document.createElement('input');
    taskItemTitle.classList.add('add-title');
    taskItemTitle.setAttribute('type', 'text');
    taskItemTitle.setAttribute('name', 'title');
    taskItemTitle.setAttribute('value', (itemToEdit?.title ?? ''));
    taskItemTitleContainer.appendChild(taskItemTitle);

    addTaskItemForm.appendChild(taskItemTitleContainer);

    //Description
    const taskItemDescriptionContainer = document.createElement('div');
    taskItemDescriptionContainer.classList.add('add-title-container');

    const taskItemDescriptionLabel = document.createElement('label');
    taskItemDescriptionLabel.classList.add('add-description-label');
    taskItemDescriptionLabel.textContent = "Description: "
    taskItemDescriptionLabel.setAttribute('for', 'description');
    taskItemDescriptionContainer.appendChild(taskItemDescriptionLabel);

    const taskItemDescription = document.createElement('textarea');
    taskItemDescription.classList.add('add-description');
    taskItemDescription.setAttribute('name', 'description');
    taskItemDescription.textContent = itemToEdit?.description ?? '';
    taskItemDescriptionContainer.appendChild(taskItemDescription);

    addTaskItemForm.appendChild(taskItemDescriptionContainer);

    //DueDate
    const taskItemDueDateContainer = document.createElement('div');
    taskItemDueDateContainer.classList.add('add-duedate-container');

    const taskItemDueDateLabel = document.createElement('label');
    taskItemDueDateLabel.classList.add('add-duedate-label');
    taskItemDueDateLabel.textContent = "Due Date: "
    taskItemDueDateLabel.setAttribute('for', 'duedate');
    taskItemDueDateContainer.appendChild(taskItemDueDateLabel);

    const taskItemDueDate = document.createElement('input');
    taskItemDueDate.classList.add('add-duedate');
    taskItemDueDate.setAttribute('type', 'date');
    taskItemDueDate.setAttribute('name', 'duedate');
    taskItemDueDate.setAttribute('value', itemToEdit?.dueDate ?? '');
    taskItemDueDateContainer.appendChild(taskItemDueDate);

    addTaskItemForm.appendChild(taskItemDueDateContainer);

    //Priority
    const taskItemPriorityContainer = document.createElement('div');
    taskItemPriorityContainer.classList.add('add-priority-container');

    const taskItemPriorityLabel = document.createElement('label');
    taskItemPriorityLabel.classList.add('add-priority-label');
    taskItemPriorityLabel.textContent = "Priority: "
    taskItemPriorityLabel.setAttribute('for', 'priority');
    taskItemPriorityContainer.appendChild(taskItemPriorityLabel);

    const taskItemPriority = document.createElement('select');
    taskItemPriority.classList.add('add-priority-select');
    taskItemPriority.setAttribute('name', 'priority');
    taskItemPriorityContainer.appendChild(taskItemPriority);

    priorityLevels.forEach((level) => {
        let levelOption = document.createElement('option');
        levelOption.classList.add('add-priority-option');
        levelOption.value = level;
        levelOption.textContent = level;

        if (level == itemToEdit?.priority){
            levelOption.selected = true;
        }

        taskItemPriority.appendChild(levelOption);
    });

    addTaskItemForm.appendChild(taskItemPriorityContainer);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('add-button-container');

    //Submit Button
    const submitButton = document.createElement('button');
    buttonContainer.classList.add('add-submit-button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = itemToEdit ? "Update Task" : "Add Task";
    buttonContainer.appendChild(submitButton);

    //Cancel Button
    const cancelButton = document.createElement('button');
    cancelButton.classList.add('add-cancel-button');
    cancelButton.setAttribute('type', 'button');
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener('click', () => {
        addTaskItemDialog.close();
    });

    buttonContainer.appendChild(cancelButton);

    addTaskItemForm.appendChild(buttonContainer);

    return addTaskItemDialog;
}

export function FilterItems() {
    console.log("Filter button was clicked!");
}

export function SortItems() {
    console.log("Sort button was clicked!");
}