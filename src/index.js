import TaskContainer, {Task} from './tasks';
import {AddTask, FilterItems, SortItems} from './taskManagement';
import TaskBar from './taskbar';

let allItems = [
    new Task('Test', 'Test Description - This is my the best description ever', 'Tomorrow', 'Urgent', 'Completed'),
    new Task('Test', 'Test Description - This is my the best description ever', 'Tomorrow', 'Urgent', 'Backlog'),
    new Task('Test', 'Test Description - This is my the best description ever', 'Tomorrow', 'Urgent', 'InProgress'),
    new Task('Test', 'Test Description - This is my the best description ever', 'Tomorrow', 'Urgent', 'Backlog')
];

const content = document.getElementById('content');

content.appendChild(TaskBar(AddTask, FilterItems, SortItems));
content.appendChild(TaskContainer(allItems));

