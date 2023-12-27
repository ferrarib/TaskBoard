import { GetTaskItems } from "./data";
import { AddTaskItemModal } from "./taskManagement";

export class Task {

    static #id = 1;

    constructor(title, description, dueDate, priority, status){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        this.taskID = Task.#id;
        Task.#id++;
    }

}

function ParseDueDate(dueDateString){

    const currentDate = new Date();
    const dueDate = new Date(dueDateString);
    const diffTime = Math.abs(currentDate - dueDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    if (diffDays == 0){
        return "Today";
    }
    else if (diffDays == 1) {
        return "Tomorrow";
    }
    else if (dueDate > currentDate && diffDays > 1 && diffDays < 4){
        return diffDays + " Days";
    }
    else if (dueDate < currentDate){
        return `Passed Due (${dueDate.toDateString()})`;
    }
    else {
        return dueDate.toDateString();
    }
}

export function CreateDOMTaskItem(taskItem) {
    let allItems = GetTaskItems();

    const itemContainer = document.createElement('div');
    itemContainer.classList.add('task-item');

    itemContainer.addEventListener('click', (e) => {
        const hidden = itemContainer.querySelector('hidden');
        console.log(allItems);
        console.log(hidden.id);
        const addDialog = AddTaskItemModal(allItems.find((item) => {return item.taskID == hidden.id}));
        const content = document.getElementById('content');
        content.appendChild(addDialog);
        addDialog.showModal();
    });

    const hiddenID = document.createElement('hidden');
    hiddenID.setAttribute('id', taskItem.taskID);
    itemContainer.appendChild(hiddenID);

    const itemContainerLine1 = document.createElement('div');
    itemContainerLine1.classList.add('item-container-line-1');

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');

    const titleIcon = document.createElement('img');
    titleIcon.src = "./assets/library.svg";

    const itemTitle = document.createElement('div');
    itemTitle.classList.add('item-title');
    itemTitle.textContent = taskItem.title;
    
    titleContainer.appendChild(titleIcon);
    titleContainer.appendChild(itemTitle);

    const itemstatusContainer = document.createElement('div');
    itemstatusContainer.classList.add('item-status-container');

    const itemStatusLabel = document.createElement('div');
    itemStatusLabel.classList.add('item-status-label');
    itemStatusLabel.textContent = "Status: ";

    const itemStatus = document.createElement('div');
    itemStatus.textContent = taskItem.status;

    itemstatusContainer.appendChild(itemStatusLabel);
    itemstatusContainer.appendChild(itemStatus);

    itemContainerLine1.appendChild(titleContainer);
    itemContainerLine1.appendChild(itemstatusContainer);

    const itemContainerLine2 = document.createElement('div');
    itemContainerLine2.classList.add('item-container-line-2');

    const itemDueDateContainer = document.createElement('div');
    itemDueDateContainer.classList.add('item-duedate-container');

    const itemDueDateLabel = document.createElement('div');
    itemDueDateLabel.classList.add('item-duedate-label');
    itemDueDateLabel.textContent = "Due: ";

    const itemDueDate = document.createElement('div');
    itemDueDate.textContent = ParseDueDate(taskItem.dueDate);

    itemDueDateContainer.appendChild(itemDueDateLabel);
    itemDueDateContainer.appendChild(itemDueDate);

    const itemPriorityContainer = document.createElement('div');
    itemPriorityContainer.classList.add('item-priority-container');

    const itemPriorityLabel = document.createElement('div');
    itemPriorityLabel.classList.add('item-priority-label');
    itemPriorityLabel.textContent = "Priority: ";

    const itemPriority = document.createElement('div');
    itemPriority.textContent = taskItem.priority;

    itemPriorityContainer.appendChild(itemPriorityLabel);
    itemPriorityContainer.appendChild(itemPriority);

    const itemDescriptionContainer = document.createElement('div');
    itemDescriptionContainer.classList.add('item-description-container');

    itemContainerLine2.appendChild(itemDueDateContainer);
    itemContainerLine2.appendChild(itemPriorityContainer);

    const itemDescriptionLabel = document.createElement('div');
    itemDescriptionLabel.classList.add('item-description-label');
    itemDescriptionLabel.textContent = "Description";

    const itemDescription = document.createElement('div');
    itemDescription.textContent = taskItem.description;
    itemDescription.classList.add('item-description');

    itemDescriptionContainer.appendChild(itemDescriptionLabel);
    itemDescriptionContainer.appendChild(itemDescription);


    itemContainer.appendChild(itemContainerLine1);
    itemContainer.appendChild(itemContainerLine2);
    itemContainer.appendChild(itemDescriptionContainer);


    return itemContainer;
}


export default function() {
    let allItems = GetTaskItems();

    let backlogItems = allItems.filter((item) => { return item.status == "Backlog"});
    let inProgressItems = allItems.filter((item) => { return item.status == "In Progress"});
    let completedItems = allItems.filter((item) => { return item.status == "Completed"});

    const taskTypeContainer = document.createElement('div');
    taskTypeContainer.classList.add('task-type-container');

    //Backlog
    const backlog = document.createElement('div');
    backlog.classList.add('task-type');

    const backlogTitle = document.createElement('div');
    backlogTitle.classList.add('task-title');
    backlogTitle.textContent = 'Backlog';
    backlog.appendChild(backlogTitle);

    const backlogItemContainer = document.createElement('div');
    backlogItemContainer.classList.add('task-item-container');

    backlogItems.forEach((item) => {
        backlogItemContainer.appendChild(CreateDOMTaskItem(item));
    });
    backlog.appendChild(backlogItemContainer);

    //In Progress
    const inProgress = document.createElement('div');
    inProgress.classList.add('task-type');

    const inProgressTitle = document.createElement('div');
    inProgressTitle.classList.add('task-title');
    inProgressTitle.textContent = 'In Progress';
    inProgress.appendChild(inProgressTitle);

    const inProgressItemContainer = document.createElement('div');
    inProgressItemContainer.classList.add('task-item-container');

    inProgressItems.forEach((item) => {
        inProgressItemContainer.appendChild(CreateDOMTaskItem(item));
    });
    inProgress.appendChild(inProgressItemContainer);

    //Completed
    const completed = document.createElement('div');
    completed.classList.add('task-type');

    const completedTitle = document.createElement('div');
    completedTitle.classList.add('task-title');
    completedTitle.textContent = 'Completed';
    completed.appendChild(completedTitle);

    const completedItemContainer = document.createElement('div');
    completedItemContainer.classList.add('task-item-container');

    completedItems.forEach((item) => {
        completedItemContainer.appendChild(CreateDOMTaskItem(item));
    });
    completed.appendChild(completedItemContainer);

    taskTypeContainer.appendChild(backlog);
    taskTypeContainer.appendChild(inProgress);
    taskTypeContainer.appendChild(completed);

    return taskTypeContainer;
}