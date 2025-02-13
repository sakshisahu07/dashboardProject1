document.getElementById("btn1").addEventListener("click", myInsert);

function myInsert() {
  let myst = document.getElementById("stname").value;
  let myst = document.getElementById("stcourse").value;  
  let myst = document.getElementById("stfees").value;

  let url = "http://localhost:3000/employees";

  fetch(url, {
    // Adding method type
    method: "POST",

    // Adding body or contents to send
    body: JSON.stringify({
      employeeno: myEmpno,
      name: myName,
      city: myCity,
      salary: mySalary,
    }),

    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    // Converting to JSON
    .then((val) => {
      console.log(val);
      return val.json();
    })
    // Displaying results to console
    .then((json) => {
      console.log(json);
      alert("Data saved successfully");
    });
}
