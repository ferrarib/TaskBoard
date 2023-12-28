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
    SetStorage(allItems);
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

    SetStorage(allItems);
}

//Here we will attempt to fet data from local storage, otherwise create a new data object with a default project.
export function Initialze() {

    let data = JSON.parse(localStorage.getItem("task-board-storage"));

    //Local Storage or Default
    if (data){
        allItems = data;
    }
    else {
        console.log("No storage found");
        allItems["Default"] = [];  
    }

    SetProjects();
}

export function SetProjects(){
    projects = [...Object.keys(allItems)];
}

export function GetProjects() {
    return projects;
}

function SetStorage(storage) {
    localStorage.setItem('task-board-storage', JSON.stringify(storage));
}