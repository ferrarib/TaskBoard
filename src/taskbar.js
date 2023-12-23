
let currentProject = "Default";

export default function(AddTask, FilterItems, SortItems) {
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