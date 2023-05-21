// Obtener referencia al formulario y la tabla
var crudForm = document.getElementById("crudForm");
var tableBody = document.getElementById("tableBody");

// Función para agregar un nuevo elemento a la tabla y almacenar en localStorage
function addDataToTable() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  // Crear una nueva fila
  var newRow = document.createElement("tr");
  var nameCell = document.createElement("td");
  var emailCell = document.createElement("td");
  var phoneCell = document.createElement("td");
  var actionsCell = document.createElement("td");

  // Agregar los datos a las celdas de la fila
  nameCell.textContent = name;
  emailCell.textContent = email;
  phoneCell.textContent = phone;
  actionsCell.innerHTML = '<button class="btn btn-danger btn-sm deleteBtn">Eliminar</button>';

  // Agregar las celdas a la fila
  newRow.appendChild(nameCell);
  newRow.appendChild(emailCell);
  newRow.appendChild(phoneCell);
  newRow.appendChild(actionsCell);

  // Agregar la fila a la tabla
  tableBody.appendChild(newRow);

  // Limpiar los campos del formulario
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";

  // Guardar los datos en el localStorage
  var data = JSON.parse(localStorage.getItem("data")) || [];
  data.push({ name: name, email: email, phone: phone });
  localStorage.setItem("data", JSON.stringify(data));
}

// Función para eliminar una fila de la tabla y actualizar el localStorage
function deleteRow(event) {
  var row = event.target.parentNode.parentNode;
  var rowIndex = row.rowIndex;
  tableBody.removeChild(row);

  var data = JSON.parse(localStorage.getItem("data")) || [];
  data.splice(rowIndex - 1, 1);
  localStorage.setItem("data", JSON.stringify(data));
}

// Cargar los datos desde el localStorage al cargar la página
window.addEventListener("load", function() {
  var data = JSON.parse(localStorage.getItem("data")) || [];

  for (var i = 0; i < data.length; i++) {
    var newRow = document.createElement("tr");
    var nameCell = document.createElement("td");
    var emailCell = document.createElement("td");
    var phoneCell = document.createElement("td");
    var actionsCell = document.createElement("td");

    nameCell.textContent = data[i].name;
    emailCell.textContent = data[i].email;
    phoneCell.textContent = data[i].phone;
    actionsCell.innerHTML = '<button class="btn btn-danger btn-sm deleteBtn">Eliminar</button>';

    newRow.appendChild(nameCell);
    newRow.appendChild(emailCell);
    newRow.appendChild(phoneCell);
    newRow.appendChild(actionsCell);
    tableBody.appendChild(newRow);
  }
});

// Manejar el envío del formulario y el evento de eliminación de fila
crudForm.addEventListener("submit", function(event) {
  event.preventDefault();
  addDataToTable();
});

tableBody.addEventListener("click", function(event) {
  if (event.target.classList.contains("deleteBtn")) {
    deleteRow(event);
  }
});

// Obtener referencia al formulario y la tabla
var crudForm = document.getElementById("crudForm");
var tableBody = document.getElementById("tableBody");

// Función para agregar un nuevo elemento a la tabla y almacenar en localStorage
function addDataToTable() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  // Crear una nueva fila
  var newRow = document.createElement("tr");
  var nameCell = document.createElement("td");
  var emailCell = document.createElement("td");
  var phoneCell = document.createElement("td");
  var actionsCell = document.createElement("td");

  // Agregar los datos a las celdas de la fila
  nameCell.textContent = name;
  emailCell.textContent = email;
  phoneCell.textContent = phone;
  actionsCell.innerHTML = '<button class="btn btn-danger btn-sm deleteBtn">Eliminar</button> ' +
                          '<button class="btn btn-primary btn-sm editBtn">Editar</button>';

  // Agregar las celdas a la fila
  newRow.appendChild(nameCell);
  newRow.appendChild(emailCell);
  newRow.appendChild(phoneCell);
  newRow.appendChild(actionsCell);

  // Agregar la fila a la tabla
  tableBody.appendChild(newRow);

  // Limpiar los campos del formulario
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";

  // Guardar los datos en el localStorage
  var data = JSON.parse(localStorage.getItem("data")) || [];
  data.push({ name: name, email: email, phone: phone });
  localStorage.setItem("data", JSON.stringify(data));
}

// Función para eliminar una fila de la tabla y actualizar el localStorage
function deleteRow(event) {
  var row = event.target.parentNode.parentNode;
  var rowIndex = row.rowIndex;
  tableBody.removeChild(row);

  var data = JSON.parse(localStorage.getItem("data")) || [];
  data.splice(rowIndex - 1, 1);
  localStorage.setItem("data", JSON.stringify(data));
}

// Función para editar una fila de la tabla y guardar los cambios en el localStorage
function editRow(event) {
  var row = event.target.parentNode.parentNode;
  var rowIndex = row.rowIndex;
  var nameCell = row.cells[0];
  var emailCell = row.cells[1];
  var phoneCell = row.cells[2];

  var name = prompt("Editar nombre:", nameCell.textContent);
  var email = prompt("Editar correo electrónico:", emailCell.textContent);
  var phone = prompt("Editar teléfono:", phoneCell.textContent);

  if (name && email && phone) {
    nameCell.textContent = name;
    emailCell.textContent = email;
    phoneCell.textContent = phone;

    var data = JSON.parse(localStorage.getItem("data")) || [];
    data[rowIndex - 1] = { name: name, email: email, phone: phone };
    localStorage.setItem("data", JSON.stringify(data));
  }
}

// Cargar los datos desde el localStorage al cargar la página
window.addEventListener("load", function() {
  var data = JSON.parse(localStorage.getItem("data")) || [];

  for (var i = 0; i < data.length; i++) {
    var newRow = document.createElement("tr");
    var nameCell = document.createElement("td");
    var emailCell = document.createElement("td");
    var phoneCell = document.createElement("td");
    var actionsCell = document.createElement("td");

    nameCell.textContent = data[i].name;
    emailCell.textContent = data[i].email;
    phoneCell.textContent = data[i].phone;
    actionsCell.innerHTML = '<button class="btn btn-danger btn-sm deleteBtn">Eliminar</button> ' +
                            '<button class="btn btn-primary btn-sm editBtn">Editar</button>';

    newRow.appendChild(nameCell);
    newRow.appendChild(emailCell);
    newRow.appendChild(phoneCell);
    newRow.appendChild(actionsCell);
    tableBody.appendChild(newRow);
  }
});

// Manejar el envío del formulario, el evento de eliminación de fila y el evento de edición de fila
crudForm.addEventListener("submit", function(event) {
  event.preventDefault();
  addDataToTable();
});

tableBody.addEventListener("click", function(event) {
  if (event.target.classList.contains("deleteBtn")) {
    deleteRow(event);
  } else if (event.target.classList.contains("editBtn")) {
    editRow(event);
  }
});
