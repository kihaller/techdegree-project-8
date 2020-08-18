/* ============================================= */
/* Search Bar functionality */
/* ============================================= */

//Retrieve all employees at the beginning
const allEmployees = document.getElementsByClassName("card");
console.log(allEmployees);

// Called on every keystroke
function checkInput(event) {
  // console.log("checkInput function called.");

  const searchTerm = document.getElementById("input").value.toLowerCase();
  // console.log("Currently in search bar: " + searchTerm);

  for (let employee of allEmployees) {
    console.log("Employee card", employee, "and its overlay", employee.overlay);

    const employeeName = employee.querySelector("#employee-name");
    const dataSearch = employeeName.textContent.toLowerCase();
    const searchTermInEmployee = dataSearch.includes(searchTerm);
    // console.log(searchTermInEmployee);

    if (searchTermInEmployee) {
      employee.style.display = "flex";
      employee.overlay.classList.add("overlay-in-slide-clicker");
    } else {
      employee.style.display = "none";
      employee.overlay.classList.remove("overlay-in-slide-clicker");
    }
  }
}

// Register event listener that calls checkInput function every time user types sth. in input field
document.getElementById("input").addEventListener("keyup", checkInput);
