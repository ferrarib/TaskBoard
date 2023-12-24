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

//Here we will attempt to fet data from local storage, otherwise create a new data object with a default project.
export function Initialze() {

    //Local Storage or Default
    if (false){

    }
    else {
        //allItems["Default"] = [];

        allItems["Default"] = [
            new Task('Test', 'Test Description - This is my the best description ever', 'Tomorrow', 'Urgent', 'Completed'),
            new Task('Test', 'Test Description - This is my the best description ever', 'Tomorrow', 'Urgent', 'Backlog'),
            new Task('Test', 'Test Description - This is my the best description ever', 'Tomorrow', 'Urgent', 'In Progress'),
            new Task('Test', 'Test Description - This is my the best description ever', 'Tomorrow', 'Urgent', 'Backlog')
        ];
        
        allItems["Admin Page"] = [
            new Task('Test', 'Test Description - This is my the best description ever', 'Tomorrow', 'Urgent', 'Backlog'),
            new Task('Test', 'Test Description - This is my the best description ever', 'Tomorrow', 'Urgent', 'Backlog')
        ];        
    }

    SetProjects();
}

export function UpdateData() {
    //Update the dataset here;
}

export function SetProjects(){
    projects = [...Object.keys(allItems)];
}

export function GetProjects() {
    return projects;
}