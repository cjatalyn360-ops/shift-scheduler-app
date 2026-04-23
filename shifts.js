async function loadEmployees() {
  const res = await fetch("http://localhost:3000/employees");
  const employees = await res.json();

  const datalist = document.getElementById("employeeList");

  employees.forEach(emp => {
    const option = document.createElement("option");
    option.value = `${emp.first_name} ${emp.last_name}`;
    datalist.appendChild(option);
  });
}


loadEmployees();
//-------------------------------------------------------------------

document.getElementById("saveShiftBtn").addEventListener("click", async () => {
  const employee_id = document.getElementById("employeeSelect").value;
  const start_time = document.getElementById("startTime").value;
  const end_time = document.getElementById("endTime").value;

  // set this when user clicks calendar day
  const shift_date = selectedDate;


  await fetch("http://localhost:3000/add-shift", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      employee_id,
      shift_date,
      start_time,
      end_time
    })
  });

  alert("Shift added!");
});
//------------------------------------------------------------------

async function loadShifts() {
  const res = await fetch("http://localhost:3000/shifts");
  const shifts = await res.json();

  shifts.forEach(shift => {
    const cell = document.querySelector(`[data-date="${shift.shift_date}"]`);

    if (cell) {
      const div = document.createElement("div");
      div.innerHTML = `
  <strong>${shift.first_name}</strong><br>
  ${shift.start_time} - ${shift.end_time}
`;


      cell.appendChild(div);
    }
  });
}

loadShifts();

//----------------------------------------------------------------------
