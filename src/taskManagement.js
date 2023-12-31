import { AddProject, AddTaskItem, DeleteProject, EditTaskItem, GetCurrentProject, GetEntireDataset } from "./data";
import { CreateDOMTaskItem, Task } from "./tasks";
import { Render } from ".";
import { RemoveDialog } from "./navBar";

const priorityLevels = ['Low', 'Medium', 'High'];
const taskStatusTypes = ['Backlog', 'In Progress', 'Completed'];

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
        if (itemToEdit == null) {
            AddTaskItem(new Task(formEntries['title'], formEntries['description'], formEntries['duedate'], formEntries['priority'], 'Backlog'));
        }
        else {
            EditTaskItem(itemToEdit, formEntries);
        }
        Render();
        addTaskItemDialog.close();
    });

    const formInputsContainer = document.createElement('div');
    formInputsContainer.classList.add('form-inputs-container');

    const leftColumnInputs = document.createElement('div');
    leftColumnInputs.classList.add('left-column-inputs');

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
    taskItemTitle.required = true;
    taskItemTitle.setAttribute('value', (itemToEdit?.title ?? ''));
    taskItemTitleContainer.appendChild(taskItemTitle);

    leftColumnInputs.appendChild(taskItemTitleContainer);

    //Description
    const taskItemDescriptionContainer = document.createElement('div');
    taskItemDescriptionContainer.classList.add('add-description-container');

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

    leftColumnInputs.appendChild(taskItemDescriptionContainer);

    formInputsContainer.appendChild(leftColumnInputs);

    const rightColumnInputs = document.createElement('div');
    rightColumnInputs.classList.add('right-column-inputs');

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
    taskItemDueDate.required = true;
    taskItemDueDateContainer.appendChild(taskItemDueDate);

    rightColumnInputs.appendChild(taskItemDueDateContainer);

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

        if (level == itemToEdit?.priority) {
            levelOption.selected = true;
        }

        taskItemPriority.appendChild(levelOption);
    });

    rightColumnInputs.appendChild(taskItemPriorityContainer);

    //Status
    const taskItemStatusContainer = document.createElement('div');
    taskItemStatusContainer.classList.add('add-status-container');

    const taskItemStatusLabel = document.createElement('label');
    taskItemStatusLabel.classList.add('add-status-label');
    taskItemStatusLabel.textContent = "Status: "
    taskItemStatusLabel.setAttribute('for', 'status');
    taskItemStatusContainer.appendChild(taskItemStatusLabel);

    const taskItemStatus = document.createElement('select');
    taskItemStatus.classList.add('add-status-select');
    taskItemStatus.setAttribute('name', 'status');
    taskItemStatusContainer.appendChild(taskItemStatus);

    if (itemToEdit == null){
        taskItemStatus.setAttribute('disabled', 'true');
    }

    taskStatusTypes.forEach((type) => {
        let statusOption = document.createElement('option');
        statusOption.classList.add('add-status-option');
        statusOption.value = type;
        statusOption.textContent = type;

        if (itemToEdit == null && type == "Backlog"){
            statusOption.selected = true;
        }

        if (itemToEdit != null && type == itemToEdit.status) {
            statusOption.selected = true;
        }

        taskItemStatus.appendChild(statusOption);
    });

    rightColumnInputs.appendChild(taskItemStatusContainer);

    formInputsContainer.appendChild(rightColumnInputs);

    addTaskItemForm.appendChild(formInputsContainer);

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
        RemoveDialog(addTaskItemDialog);
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

export function RenderManageProjectsModal(){
    let allItems = GetEntireDataset();
    let currentProject = GetCurrentProject();
    let defaultProject;

    const content = document.getElementById('content');
    const dialog = document.getElementById('manage-projects-dialog');
    
    if (dialog != null)
        content.removeChild(dialog);

    let manageProjectsDialog = document.createElement('dialog');
    manageProjectsDialog.id = "manage-projects-dialog";

    const manageProjectsContent = document.createElement('div');
    manageProjectsContent.classList.add('manage-projects-content');

    const projectsContainer = document.createElement('div');
    projectsContainer.classList.add('projects-container');

    const projectItemsContainer = document.createElement('div');
    projectItemsContainer.classList.add('project-items-container');

    let bgFlag = false;

    Object.entries(allItems).forEach((entry) => {
        const project = document.createElement('div');
        project.classList.add('project');
        project.classList.add('hidden');
        project.tabIndex = "-1";

        if (entry[0] == "Default"){
            defaultProject = project;
        }

        if (bgFlag == true){
            project.style.backgroundColor = "rgb(247, 247, 247)";
        }

        project.addEventListener('click', (e) => {
            project.classList.add('focused');
            project.classList.remove('hidden');

            //remove focused class from remaining children;
            const children = projectsContainer.children;
            for(let i = 0; i < children.length; i++){
                if (children[i] != project){
                    children[i].classList.remove('focused');
                    children[i].classList.add('hidden');
                }
            }

            projectItemsContainer.innerHTML = '';
            allItems[entry[0]].forEach((task) => {
                const taskItem = CreateDOMTaskItem(task);
                projectItemsContainer.appendChild(taskItem.cloneNode(true));

            });
        }, {capture: true});
        
        const projectName = document.createElement('div');
        projectName.classList.add('project-name');
        projectName.textContent = entry[0];

        const projectDelete = document.createElement('img');
        projectDelete.classList.add('project-delete');
        projectDelete.setAttribute('src', './assets/delete.svg');

        projectDelete.addEventListener('click', () => {
            //Are you sure? Screen

            //Delete project and set new focused item to default project
            const clickedProject = projectDelete.parentNode.querySelector('.project-name').textContent;
            
            //Get Child that is associated to 'clickedProject'
            const children = projectsContainer.children;
            let childToDelete;
            for (let i = 0; i < children.length; i++){
                let childName = children[i].querySelector('.project-name').textContent;
                if (childName == clickedProject)
                    childToDelete = children[i];
            }

            projectsContainer.removeChild(childToDelete);
            
            //Delete from backend
            DeleteProject(clickedProject);

            defaultProject.click();
        });

        project.appendChild(projectName);
        if (entry[0] != "Default"){
            project.appendChild(projectDelete);
        }

        projectsContainer.appendChild(project);
        bgFlag = !bgFlag;

        if (entry[0] == currentProject){
            project.click();
        }
    });

    if (projectsContainer.children.length < 8){
        const addProject = document.createElement('div');
        addProject.classList.add('project');
        addProject.classList.add('add-project');

        const addProjectName = document.createElement('div');
        addProjectName.classList.add('project-name');
        addProjectName.textContent = "Add Project";

        addProject.addEventListener('click', (e) => {
            e.stopPropagation();
            const addProjectInput = document.createElement('input');

            addProject.innerHTML = '';
            addProject.appendChild(addProjectInput);
            addProjectInput.focus();

            addProjectInput.addEventListener('keydown', (e) => {
                if (e.key == 'Enter'){
                    console.log('submitting project...');
                    let newProjectName = addProjectInput.value;
                    AddProject(newProjectName);
                    RenderManageProjectsModal();
                }
            });

            addProjectInput.addEventListener('focusout', (e) => {
                addProject.innerHTML = '';
                addProject.appendChild(addProjectName);
            })
        });



        addProject.appendChild(addProjectName);

        projectsContainer.appendChild(addProject);
        
    }

    manageProjectsContent.appendChild(projectsContainer); 
    manageProjectsContent.appendChild(projectItemsContainer); 

    const manageProjectsButtonContainer = document.createElement('div');
    manageProjectsButtonContainer.classList.add('manage-projects-button-container');

    const manageProjectsCloseButton = document.createElement('button');
    manageProjectsCloseButton.classList.add('manage-projects-close');
    manageProjectsCloseButton.textContent = "Close";

    manageProjectsCloseButton.addEventListener('click', () => {
        RemoveDialog(manageProjectsDialog);
        Render();
    });

    manageProjectsButtonContainer.appendChild(manageProjectsCloseButton);

    manageProjectsDialog.appendChild(manageProjectsContent);
    manageProjectsDialog.appendChild(manageProjectsButtonContainer);

    content.appendChild(manageProjectsDialog);
}