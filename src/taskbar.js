import { Render } from "./index";
import {AddTask, FilterItems, SortItems} from './taskManagement';
import { GetProjects, GetCurrentProject, SetCurrentProject } from './data';

export default function() {
    let projects = GetProjects();
    let currentProject = GetCurrentProject();

    const taskBar = document.createElement('div');
    taskBar.classList.add('task-bar');

    //Active Project
    const activeProjectContainer = document.createElement('div');
    activeProjectContainer.classList.add('active-project-container');

    const activeProjectPrefix = document.createElement('div');
    activeProjectPrefix.classList.add('active-project-prefix');
    activeProjectPrefix.textContent = "Project / ";
    const activeProject = document.createElement('select');
    activeProject.id = 'active-project';
    projects.forEach((project) => {
        const option = document.createElement('option');
        option.setAttribute('value', project);
        option.textContent = project;
        if (project == currentProject){
            option.setAttribute('selected', true);
        }
        activeProject.appendChild(option);
    });

    activeProject.addEventListener('change', (e) => {
        let children = e.target.children;
        let activeChild = "Default";
        for (let i = 0; i < children.length; i++){
            if (children[i].selected){
                activeChild = children[i].value;
            }
        }
        SetCurrentProject(activeChild);
        Render();
    });


    activeProjectContainer.appendChild(activeProjectPrefix);
    activeProjectContainer.appendChild(activeProject);
    taskBar.appendChild(activeProjectContainer);

    //Filters
    const filtersContainer = document.createElement('div');
    filtersContainer.classList.add('filters-container');

    const addTaskButton = document.createElement('img');
    addTaskButton.classList.add('filter-button');
    addTaskButton.classList.add('add-task');
    addTaskButton.setAttribute('src', './assets/plus.svg')
    addTaskButton.addEventListener('click', () => {
        AddTask();
    });
    addTaskButton.addEventListener('mouseover', () => {
        addTaskButton.setAttribute('src', './assets/plus-hover.svg')
    });
    addTaskButton.addEventListener('mouseout', () => {
        addTaskButton.setAttribute('src', './assets/plus.svg')
    });

    const filterButton = document.createElement('img');
    filterButton.classList.add('filter-button');
    filterButton.classList.add('filter');
    filterButton.setAttribute('src', './assets/filter.svg');
    filterButton.addEventListener('click', () => {
        FilterItems();
    });
    filterButton.addEventListener('mouseover', () => {
        filterButton.setAttribute('src', './assets/filter-hover.svg')
    });
    filterButton.addEventListener('mouseout', () => {
        filterButton.setAttribute('src', './assets/filter.svg')
    });

    const sortButton = document.createElement('img');
    sortButton.classList.add('filter-button');
    sortButton.classList.add('sort');
    sortButton.setAttribute('src', './assets/sort.svg');
    sortButton.addEventListener('click', () => {
        SortItems();
    });
    sortButton.addEventListener('mouseover', () => {
        sortButton.setAttribute('src', './assets/sort-hover.svg')
    });
    sortButton.addEventListener('mouseout', () => {
        sortButton.setAttribute('src', './assets/sort.svg')
    });

    filtersContainer.appendChild(addTaskButton);
    filtersContainer.appendChild(filterButton);
    filtersContainer.appendChild(sortButton);

    taskBar.appendChild(filtersContainer);
    
    return taskBar;
}