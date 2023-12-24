import TaskContainer from './tasks';
import TaskBar from './taskbar';
import { Initialze } from './data';

export function Render() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.appendChild(TaskBar());
    content.appendChild(TaskContainer());
}

Initialze();
Render();

