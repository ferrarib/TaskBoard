import { Task } from "./tasks";

let currentProject = "Default";
let projects = [];
let allItems = {};

export function SetCurrentProject(project) {
    currentProject = project;
}

export function GetCurrentProject(){
    return currentProject;
}

export function GetTaskItems(){
    return allItems[currentProject];
}

export function AddTaskItem(taskItem) {
    allItems[currentProject].push(taskItem);
};

export function GetEntireDataset() {
    return allItems;
};

export function DeleteProject(projectName){
    delete allItems[projectName];
}

export function EditTaskItem(itemToEdit, formEntries) {
    let itemIndex = allItems[currentProject].findIndex((item) => { return itemToEdit.taskID == item.taskID});

    (allItems[currentProject])[itemIndex].title = formEntries['title'];
    (allItems[currentProject])[itemIndex].description = formEntries['description'];
    (allItems[currentProject])[itemIndex].dueDate = formEntries['duedate'];
    (allItems[currentProject])[itemIndex].priority = formEntries['priority'];
    (allItems[currentProject])[itemIndex].status = formEntries['status'];
    // (allItems[currentProject])[itemIndex].status = formEntries['title'];
}

//Here we will attempt to fet data from local storage, otherwise create a new data object with a default project.
export function Initialze() {

    //Local Storage or Default
    if (false){

    }
    else {
        //allItems["Default"] = [];

        allItems["Default"] = [
            new Task('Test', 'Test Description - This is my the best description ever', '2023-12-28', 'Low', 'Completed'),
            new Task('Test', 'Test Description - This is my the best description ever', '2023-12-28', 'Medium', 'Backlog'),
            new Task('Test', 'Test Description - This is my the best description ever', '2023-12-28', 'High', 'In Progress'),
            new Task('Test', 'Test Description - This is my the best description ever', '2023-12-28', 'Low', 'Backlog')
        ];
        
        allItems["Admin Page"] = [
            new Task('Test', 'Test Description - This is my the best description ever', '2023-12-28', 'Urgent', 'Backlog'),
            new Task('Test', 'Test Description - This is my the best description ever', '2023-12-28', 'Urgent', 'Backlog')
        ];      
        
        allItems["Personal Portfolio"] = [
            new Task('Test', 'Test Description - This is my the best description ever', '2023-12-28', 'Urgent', 'Backlog'),
            new Task('Test', 'Test Description - This is my the best description ever', '2023-12-28', 'Urgent', 'Backlog')
        ];  
    }

    SetProjects();
}

export function SetProjects(){
    projects = [...Object.keys(allItems)];
}

export function GetProjects() {
    return projects;
}