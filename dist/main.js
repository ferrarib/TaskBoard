(()=>{"use strict";var t={d:(e,n)=>{for(var d in n)t.o(n,d)&&!t.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:n[d]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{H:()=>v});let e="Default",n=[],d={};function s(t){e=t}function a(){return e}function i(){return d[e]}function c(){return d}function o(t){delete d[t],u(d)}function l(t){const n=d[e].findIndex((e=>e.taskID==t));d[e].splice(n,1),u(d)}function r(){return n}function u(t){localStorage.setItem("task-board-storage",JSON.stringify(t))}const p=["Low","Medium","High"],m=["Backlog","In Progress","Completed"];function h(t=null){const n=document.createElement("dialog");n.id="add-dialog";const s=document.createElement("form");s.classList.add("add-form"),n.appendChild(s),s.addEventListener("submit",(s=>{s.preventDefault();let a=new FormData(s.target),i=Object.fromEntries(a);var c;null==t?(c=new C(i.title,i.description,i.duedate,i.priority,"Backlog"),d[e].push(c),u(d)):function(t,n){let s=d[e].findIndex((e=>t.taskID==e.taskID));d[e][s].title=n.title,d[e][s].description=n.description,d[e][s].dueDate=n.duedate,d[e][s].priority=n.priority,d[e][s].status=n.status,u(d)}(t,i),v(),n.close()}));const a=document.createElement("div");a.classList.add("form-inputs-container");const i=document.createElement("div");i.classList.add("left-column-inputs");const c=document.createElement("div");c.classList.add("add-title-container");const o=document.createElement("label");o.classList.add("add-title-label"),o.textContent="Title: ",o.setAttribute("for","title"),c.appendChild(o);const l=document.createElement("input");l.classList.add("add-title"),l.setAttribute("type","text"),l.setAttribute("name","title"),l.required=!0,l.setAttribute("value",t?.title??""),c.appendChild(l),i.appendChild(c);const r=document.createElement("div");r.classList.add("add-description-container");const h=document.createElement("label");h.classList.add("add-description-label"),h.textContent="Description: ",h.setAttribute("for","description"),r.appendChild(h);const E=document.createElement("textarea");E.classList.add("add-description"),E.setAttribute("name","description"),E.textContent=t?.description??"",r.appendChild(E),i.appendChild(r),a.appendChild(i);const L=document.createElement("div");L.classList.add("right-column-inputs");const b=document.createElement("div");b.classList.add("add-duedate-container");const g=document.createElement("label");g.classList.add("add-duedate-label"),g.textContent="Due Date: ",g.setAttribute("for","duedate"),b.appendChild(g);const f=document.createElement("input");f.classList.add("add-duedate"),f.setAttribute("type","date"),f.setAttribute("name","duedate"),f.setAttribute("value",t?.dueDate??""),f.required=!0,b.appendChild(f),L.appendChild(b);const k=document.createElement("div");k.classList.add("add-priority-container");const y=document.createElement("label");y.classList.add("add-priority-label"),y.textContent="Priority: ",y.setAttribute("for","priority"),k.appendChild(y);const x=document.createElement("select");x.classList.add("add-priority-select"),x.setAttribute("name","priority"),k.appendChild(x),p.forEach((e=>{let n=document.createElement("option");n.classList.add("add-priority-option"),n.value=e,n.textContent=e,e==t?.priority&&(n.selected=!0),x.appendChild(n)})),L.appendChild(k);const A=document.createElement("div");A.classList.add("add-status-container");const D=document.createElement("label");D.classList.add("add-status-label"),D.textContent="Status: ",D.setAttribute("for","status"),A.appendChild(D);const j=document.createElement("select");j.classList.add("add-status-select"),j.setAttribute("name","status"),A.appendChild(j),null==t&&j.setAttribute("disabled","true"),m.forEach((e=>{let n=document.createElement("option");n.classList.add("add-status-option"),n.value=e,n.textContent=e,null==t&&"Backlog"==e&&(n.selected=!0),null!=t&&e==t.status&&(n.selected=!0),j.appendChild(n)})),L.appendChild(A),a.appendChild(L),s.appendChild(a);const I=document.createElement("div");I.classList.add("add-button-container");const P=document.createElement("button");I.classList.add("add-submit-button"),P.setAttribute("type","submit"),P.textContent=t?"Update Task":"Add Task",I.appendChild(P);const w=document.createElement("button");return w.classList.add("add-cancel-button"),w.setAttribute("type","button"),w.textContent="Cancel",w.addEventListener("click",(()=>{n.close()})),I.appendChild(w),s.appendChild(I),n}class C{static#t=1;constructor(t,e,n,d,s){this.title=t,this.description=e,this.dueDate=n,this.priority=d,this.status=s,this.taskID=C.#t,C.#t++}}function E(t){let e=i();const n=document.createElement("div");n.classList.add("task-item"),n.addEventListener("click",(t=>{const d=n.querySelector("hidden");console.log(e),console.log(d.id);const s=h(e.find((t=>t.taskID==d.id)));document.getElementById("content").appendChild(s),s.showModal()}));const d=document.createElement("hidden");d.setAttribute("id",t.taskID),n.appendChild(d);const s=document.createElement("div");s.classList.add("item-container-line-1");const a=document.createElement("div");a.classList.add("title-container");const c=document.createElement("img");c.src="./assets/library.svg";const o=document.createElement("div");o.classList.add("item-title"),o.textContent=t.title,a.appendChild(c),a.appendChild(o);const r=document.createElement("div");r.classList.add("item-status-container");const u=document.createElement("div");u.classList.add("item-status-label"),u.textContent="Status: ";const p=document.createElement("div");p.textContent=t.status,r.appendChild(u),r.appendChild(p),s.appendChild(a),s.appendChild(r);const m=document.createElement("div");m.classList.add("item-container-line-2");const C=document.createElement("div");C.classList.add("item-duedate-container");const E=document.createElement("div");E.classList.add("item-duedate-label"),E.textContent="Due: ";const L=document.createElement("div");L.textContent=function(t){const e=new Date,n=new Date(t),d=Math.abs(e-n),s=Math.ceil(d/864e5);return 0==s?"Today":1==s?"Tomorrow":n>e&&s>1&&s<4?s+" Days":n<e?`Passed Due (${n.toDateString()})`:n.toDateString()}(t.dueDate),C.appendChild(E),C.appendChild(L);const b=document.createElement("div");b.classList.add("item-priority-container");const g=document.createElement("div");g.classList.add("item-priority-label"),g.textContent="Priority: ";const f=document.createElement("div");f.textContent=t.priority,b.appendChild(g),b.appendChild(f);const k=document.createElement("div");k.classList.add("item-description-container"),m.appendChild(C),m.appendChild(b);const y=document.createElement("div");y.classList.add("item-description-label"),y.textContent="Description";const x=document.createElement("div");x.textContent=t.description,x.classList.add("item-description"),k.appendChild(y),k.appendChild(x),n.appendChild(s),n.appendChild(m),n.appendChild(k);const A=document.createElement("img");return A.classList.add("delete-item-button"),A.classList.add("hide-button"),A.setAttribute("src","./assets/delete.svg"),A.addEventListener("click",(e=>{e.stopPropagation(),l(t.taskID),v()})),n.addEventListener("mouseover",(t=>{t.stopPropagation(),A.classList.remove("hide-button")})),n.addEventListener("mouseout",(t=>{t.stopPropagation(),A.classList.add("hide-button")})),n.appendChild(A),n}function v(){const t=document.getElementById("content");t.innerHTML="",t.appendChild(function(){let t=r(),e=a();const n=document.createElement("div");n.classList.add("task-bar");const d=document.createElement("div");d.classList.add("active-project-container");const i=document.createElement("div");i.classList.add("active-project-prefix"),i.textContent="Project / ";const c=document.createElement("select");c.id="active-project",t.forEach((t=>{const n=document.createElement("option");n.classList.add("active-project-option"),n.setAttribute("value",t),n.textContent=t,t==e&&n.setAttribute("selected",!0),c.appendChild(n)})),c.addEventListener("change",(t=>{let e=t.target.children,n="Default";for(let t=0;t<e.length;t++)e[t].selected&&(n=e[t].value);s(n),v()})),d.appendChild(i),d.appendChild(c),n.appendChild(d);const o=document.createElement("div");o.classList.add("filters-container");const l=document.createElement("img");l.classList.add("filter-button"),l.classList.add("add-task"),l.setAttribute("src","./assets/plus.svg"),l.addEventListener("click",(()=>{const t=document.getElementById("content"),e=h();t.appendChild(e),e.showModal()})),l.addEventListener("mouseover",(()=>{l.setAttribute("src","./assets/plus-hover.svg")})),l.addEventListener("mouseout",(()=>{l.setAttribute("src","./assets/plus.svg")}));const u=document.createElement("img");u.classList.add("filter-button"),u.classList.add("filter"),u.setAttribute("src","./assets/filter.svg"),u.addEventListener("click",(()=>{console.log("Filter button was clicked!")})),u.addEventListener("mouseover",(()=>{u.setAttribute("src","./assets/filter-hover.svg")})),u.addEventListener("mouseout",(()=>{u.setAttribute("src","./assets/filter.svg")}));const p=document.createElement("img");return p.classList.add("filter-button"),p.classList.add("sort"),p.setAttribute("src","./assets/sort.svg"),p.addEventListener("click",(()=>{console.log("Sort button was clicked!")})),p.addEventListener("mouseover",(()=>{p.setAttribute("src","./assets/sort-hover.svg")})),p.addEventListener("mouseout",(()=>{p.setAttribute("src","./assets/sort.svg")})),o.appendChild(l),o.appendChild(u),o.appendChild(p),n.appendChild(o),n}()),t.appendChild(function(){let t=i(),e=t.filter((t=>"Backlog"==t.status)),n=t.filter((t=>"In Progress"==t.status)),d=t.filter((t=>"Completed"==t.status));const s=document.createElement("div");s.classList.add("task-type-container");const a=document.createElement("div");a.classList.add("task-type");const c=document.createElement("div");c.classList.add("task-title"),c.textContent="Backlog",a.appendChild(c);const o=document.createElement("div");o.classList.add("task-item-container"),e.forEach((t=>{o.appendChild(E(t))})),a.appendChild(o);const l=document.createElement("div");l.classList.add("task-type");const r=document.createElement("div");r.classList.add("task-title"),r.textContent="In Progress",l.appendChild(r);const u=document.createElement("div");u.classList.add("task-item-container"),n.forEach((t=>{u.appendChild(E(t))})),l.appendChild(u);const p=document.createElement("div");p.classList.add("task-type");const m=document.createElement("div");m.classList.add("task-title"),m.textContent="Completed",p.appendChild(m);const h=document.createElement("div");return h.classList.add("task-item-container"),d.forEach((t=>{h.appendChild(E(t))})),p.appendChild(h),s.appendChild(a),s.appendChild(l),s.appendChild(p),s}())}document.getElementById("nav").appendChild(function(){const t=document.createElement("div");t.classList.add("nav-bar");const e=document.createElement("div");e.classList.add("title"),e.textContent="Task Board";const n=document.createElement("div");return n.classList.add("manage-projects"),n.textContent="Manage Projects",n.addEventListener("click",(()=>{console.log("Navbar");const t=document.getElementById("content"),e=function(){let t,e=c(),n=a();const d=document.createElement("dialog");d.id="manage-projects-dialog";const s=document.createElement("div");s.classList.add("manage-projects-content");const i=document.createElement("div");i.classList.add("projects-container");const l=document.createElement("div");l.classList.add("project-items-container");let r=!1;Object.entries(e).forEach((d=>{const s=document.createElement("div");s.classList.add("project"),s.classList.add("hidden"),s.tabIndex="-1","Default"==d[0]&&(t=s),1==r&&(s.style.backgroundColor="rgb(247, 247, 247)"),s.addEventListener("click",(t=>{s.classList.add("focused"),s.classList.remove("hidden");const n=i.children;for(let t=0;t<n.length;t++)n[t]!=s&&(n[t].classList.remove("focused"),n[t].classList.add("hidden"));l.innerHTML="",e[d[0]].forEach((t=>{const e=E(t);l.appendChild(e.cloneNode(!0))}))}),{capture:!0});const a=document.createElement("div");a.classList.add("project-name"),a.textContent=d[0];const c=document.createElement("img");c.classList.add("project-delete"),c.setAttribute("src","./assets/delete.svg"),c.addEventListener("click",(()=>{const e=c.parentNode.querySelector(".project-name").textContent,n=i.children;let d;for(let t=0;t<n.length;t++)n[t].querySelector(".project-name").textContent==e&&(d=n[t]);i.removeChild(d),o(e),t.click()})),s.appendChild(a),"Default"!=d[0]&&s.appendChild(c),i.appendChild(s),r=!r,d[0]==n&&s.click()})),s.appendChild(i),s.appendChild(l);const u=document.createElement("div");u.classList.add("manage-projects-button-container");const p=document.createElement("button");return p.classList.add("manage-projects-close"),p.textContent="Close",p.addEventListener("click",(()=>function(t){document.getElementById("content").removeChild(t)}(d))),u.appendChild(p),d.appendChild(s),d.appendChild(u),d}();t.appendChild(e),e.showModal()})),t.appendChild(e),t.appendChild(n),t}()),function(){let t=JSON.parse(localStorage.getItem("task-board-storage"));t?d=t:(console.log("No storage found"),d.Default=[]),n=[...Object.keys(d)]}(),v()})();