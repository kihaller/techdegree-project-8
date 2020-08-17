/* ============================================= */
/* Search Bar functionality */
/* ============================================= */

//Retrieve all employees at the beginning
const allEmployees = document.getElementsByClassName("card");
console.log(allEmployees);

// Called on every keystroke
function checkInput(event) {
  console.log("checkInput function called.");

  const searchTerm = document.getElementById("input").value.toLowerCase();
  console.log("Currently in search bar: " + searchTerm);

  for (let employee of allEmployees) {
    const employeeName = employee.querySelector("#employee-name");
    const dataSearch = employeeName.textContent.toLowerCase();
    const searchTermInEmployee = dataSearch.includes(searchTerm);
    console.log(searchTermInEmployee);

    if (searchTermInEmployee) {
      employee.style.display = "flex";
    } else {
      employee.style.display = "none";
    }
  }
}

// Register event listener that calls checkInput function every time user types sth. in input field
document.getElementById("input").addEventListener("keyup", checkInput);
