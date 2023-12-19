
export default function() {
    const taskTypeContainer = document.createElement('div');
    taskTypeContainer.classList.add('task-type-container');

    //Backlog
    const backlog = document.createElement('div');
    backlog.classList.add('task-type');

    const backlogTitle = document.createElement('div');
    backlogTitle.classList.add('task-title');
    backlogTitle.textContent = 'Backlog';
    backlog.appendChild(backlogTitle);

    //In Progress
    const inProgress = document.createElement('div');
    inProgress.classList.add('task-type');

    const inProgressTitle = document.createElement('div');
    inProgressTitle.classList.add('task-title');
    inProgressTitle.textContent = 'In Progress';
    inProgress.appendChild(inProgressTitle);

    //Completed
    const completed = document.createElement('div');
    completed.classList.add('task-type');

    const completedTitle = document.createElement('div');
    completedTitle.classList.add('task-title');
    completedTitle.textContent = 'Completed';
    completed.appendChild(completedTitle);

    taskTypeContainer.appendChild(backlog);
    taskTypeContainer.appendChild(inProgress);
    taskTypeContainer.appendChild(completed);

    return taskTypeContainer;
}