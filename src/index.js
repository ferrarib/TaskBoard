import TaskContainer from './tasks';
import TaskBar from './taskbar';

const content = document.getElementById('content');

content.appendChild(TaskBar());
content.appendChild(TaskContainer());

