
let currentProject = "Default";

export default function() {
    const taskBar = document.createElement('div');
    taskBar.classList.add('task-bar');

    //Active Project
    const activeProject = document.createElement('div');
    activeProject.classList.add('active-project');
    activeProject.textContent = "Project / " + currentProject;

    taskBar.appendChild(activeProject);

    //Filters
    const filtersContainer = document.createElement('div');
    filtersContainer.classList.add('filters-container');

    const filterButton = document.createElement('img');
    filterButton.classList.add('filter-button');
    filterButton.classList.add('filter');
    filterButton.setAttribute('src', './assets/filter.svg')

    const sortButton = document.createElement('img');
    sortButton.classList.add('filter-button');
    sortButton.classList.add('sort');
    sortButton.setAttribute('src', './assets/sort.svg')

    filtersContainer.appendChild(filterButton);
    filtersContainer.appendChild(sortButton);

    taskBar.appendChild(filtersContainer);
    
    return taskBar;
}