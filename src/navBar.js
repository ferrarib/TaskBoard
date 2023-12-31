
import { RenderManageProjectsModal } from "./taskManagement";

export default function NavBar(){
    const navBar = document.createElement('div');
    navBar.classList.add('nav-bar');

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = "Task Board";

    const manageProjects = document.createElement('div');
    manageProjects.classList.add('manage-projects');
    manageProjects.textContent = "Manage Projects";

    manageProjects.addEventListener('click', () => {
        console.log("Navbar");
        RenderManageProjectsModal();
    });

    navBar.appendChild(title);
    navBar.appendChild(manageProjects);
    

    return navBar;
}

export function RemoveDialog(dialog){
    const content = document.getElementById('content');
    content.removeChild(dialog);
}