import TaskContainer from './tasks';
import TaskBar from './taskbar';
import NavBar from './navBar';
import { Initialze } from './data';

export function Render() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.appendChild(TaskBar());
    content.appendChild(TaskContainer());
}

const nav = document.getElementById('nav');
nav.appendChild(NavBar());

Initialze();
Render();

