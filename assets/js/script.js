// Define an array to store the projects
let projects = [];

// Define a function to add a new project to the array
function addProject(name, type, dueDate) {
  projects.push({
    name: name,
    type: type,
    dueDate: dueDate
  });
}

// Define a function to remove a project from the array
function removeProject(index) {
  projects.splice(index, 1);
}

// Define a function to display the projects in the table
function displayProjects() {
  let tableBody = document.getElementById("project-table-body");
  tableBody.innerHTML = "";

  for (let i = 0; i < projects.length; i++) {
    let project = projects[i];

    let row = document.createElement("tr");

    let nameCell = document.createElement("td");
    nameCell.textContent = project.name;
    row.appendChild(nameCell);

    let typeCell = document.createElement("td");
    typeCell.textContent = project.type;
    row.appendChild(typeCell);

    let dueDateCell = document.createElement("td");
    dueDateCell.textContent = project.dueDate;
    row.appendChild(dueDateCell);

    let deleteCell = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "btn btn-danger";
    deleteButton.addEventListener("click", function() {
      removeProject(i);
      displayProjects();
    });
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    tableBody.appendChild(row);
  }
}

// Define a function to handle the "Add Project" button click event
function addProjectButtonClick() {
  let nameInput = document.getElementById("project-name-input");
  let typeInput = document.getElementById("project-type-input");
  let dueDateInput = document.getElementById("project-due-date-input");

  let name = nameInput.value;
  let type = typeInput.value;
  let dueDate = dueDateInput.value;

  addProject(name, type, dueDate);
  displayProjects();

  nameInput.value = "";
  typeInput.value = "";
  dueDateInput.value = "";
}

// Attach the addProjectButtonClick function to the "Add Project" button
let addProjectButton = document.getElementById("add-project-button");
addProjectButton.addEventListener("click", addProjectButtonClick);

$(document).ready(function() {
    // select form and input elements
    let projectFormEl = $('#project-form');
    let nameInput = $('#project-name-input');
    let typeInput = $('#project-type-input');
    let dueDateInput = $('#project-due-date-input');
  
    // attach submit event listener to form
    projectFormEl.on('submit', function(event) {
      // prevent default form submission behavior
      event.preventDefault();
  
      // capture input values
      let name = nameInput.val();
      let type = typeInput.val();
      let dueDate = dueDateInput.val();
  
      // add project to array
      addProject(name, type, dueDate);
  
      // clear form data
      nameInput.val('');
      typeInput.val('');
      dueDateInput.val('');
  
      // display projects in table
      displayProjects();
  
      // close modal
      $('#project-modal').modal('hide');
    });
  });
