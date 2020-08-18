/* Variables*/
const closeButton = document.getElementById("modal-close-button");
const overlay = document.getElementById("overlay");
const grid = document.getElementById("grid-container");
const urlAPI =
  "https://randomuser.me/api/?results=12&inc=name,dob,location,phone,picture,email&nat=us";
let overlayId = 0;

/* Fetch data from API*/
async function getRandomEmployees() {
  try {
    const response = await fetch(urlAPI);
    return response.json();
  } catch (error) {
    throw error;
  }
}

/* Create employee cards*/
function createEmployeeElements(employee) {
  // create employee card
  const employeeCard = createEmployeeCard(employee);

  // create employee overlay
  const employeeOverlay = createEmployeeOverlay(employee);

  employeeCard.overlay = employeeOverlay;
  employeeOverlay.card = employeeCard;

  // create click listener on card to show overlay
  employeeCard.addEventListener("click", () => {
    employeeOverlay.classList.remove("hidden");
  });
}

function createEmployeeCard(employee) {
  console.log("Create employee card with employee: ", employee);
  const employeeCard = document.createElement("div");
  employeeCard.classList.add("card");
  employeeCard.innerHTML = `
  <img class="avatar" src="${employee.picture.large}" />
  <div class="text-container">
    <h2 id="employee-name">${employee.name.first} ${employee.name.last}</h2>
    <p class="email">${employee.email}</p>
    <p class="city">${employee.location.city}</p>
  </div>
  `;
  grid.appendChild(employeeCard);

  return employeeCard;
}

function createEmployeeOverlay(employee) {
  const employeeOverlay = document.createElement("div");
  employeeOverlay.classList.add("overlay");
  employeeOverlay.classList.add("hidden");
  employeeOverlay.classList.add("overlay-in-slide-clicker");
  employeeOverlay.id = overlayId;
  overlayId++;
  employeeOverlay.innerHTML = `
  <div class="modal">
    <button class="modal-close-button" id="modal-close-button">×</button>
    <div class="content-modal">
      <img class="avatar-overlay" src="${employee.picture.large}" />
      <h2>${employee.name.first} ${employee.name.last}</h2>
      <p class="email">${employee.email}</p>
      <a class="prev">&#10094;</a>
      <a class="next">&#10095;</a>
      <p class="city">${employee.location.city}</p>
      <hr />
      <p>${employee.phone}</p>
      <p class="address">${employee.location.street.number} ${
    employee.location.city
  }, ${employee.location.state} ${employee.location.postcode}</p>
      <p>Birthday: ${new Date(employee.dob.date).toLocaleDateString(undefined, {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })}</p>
    </div>
  </div>
  `;
  const closeButton = employeeOverlay.children[0].children[0];
  //create click listener on close button
  closeButton.addEventListener("click", () => {
    employeeOverlay.classList.add("hidden");
  });
  grid.appendChild(employeeOverlay);

  // click listener for prev
  const prevButton = employeeOverlay.querySelector(".prev");
  prevButton.addEventListener("click", (event) => {
    showPreviousOverlay(event.target.parentNode.parentNode.parentNode);
  });

  // click listener for next
  const nextButton = employeeOverlay.querySelector(".next");
  nextButton.addEventListener("click", (event) => {
    showNextOverlay(event.target.parentNode.parentNode.parentNode);
  });

  return employeeOverlay;
}

window.onload = async function () {
  const employees = await getRandomEmployees();
  employees.results.map((employee) => createEmployeeElements(employee));
};
