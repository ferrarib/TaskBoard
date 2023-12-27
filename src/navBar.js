
import { ManageProjectsModal } from "./taskManagement";

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
        const content = document.getElementById('content');
        const dialog = ManageProjectsModal();

        content.appendChild(dialog);
        dialog.showModal();
    });

    navBar.appendChild(title);
    navBar.appendChild(manageProjects);
    

    return navBar;
}