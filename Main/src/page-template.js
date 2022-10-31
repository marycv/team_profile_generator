const managerList = [];
const engineerList = [];
const internList = [];

// Create a function that takes the employeeList array, split by the .getRole method
const employeesByRole = employeeList => {
    employeeList.forEach(element => {
        if(element.getRole() === "Manager") {
            // Push to empty managerList array
            managerList.push(element);
        } else if(element.getRole() === "Engineer") {
            // Push to empty engineerList array
            engineerList.push(element);
        } else {
            // Push to internList array
            internList.push(element);
        }
    })
    const test = managerList.map(managerCard);

    console.log(test);
    console.log(managerList);
};

// Create a function that generates an HTML card for Manager
const managerCard = (manager) => {
    return `
    ${manager.name}
    ${manager.id}
    ${manager.email}
    ${manager.officeNumber}
    `

// const managerCard = managerList.map( )
};

// Create a function of the final HTML output
    // Master HTML template
const teamHTML = (employeeList) => {
    employeesByRole(employeeList);
     return `
     <!DOCTYPE html>
     <html lang="en-US">
        <head>
            <meta charset="UTF-8" />
            <title>Team Profile</title>
            <!-- Link to Bootstrap for styling -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        </head>
        <body>
            <!-- Script tag for JavaScript Bundle -->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
            
            <!-- Manager Card -->
            <div class="card col-md-3 m-2 bg-white text-black">
                <div class="card-body">
                    <h3 class="card-title py-2">${managerCard(data.name)}</h3>
                    <ul class="list-group">
                        <li class="list-group-item">ID-${managerCard(data.id)}</li>
                        <li class="list-group-item">${managerCard(data.email)}</li>
                        <li class="list-group-item">${managerCard(data.officeNumber)}</li>
                    </ul>
                </div>
            </div>
        
        </body>
    </html>
     `
};



// Create a function that generates an HTML card for Engineer
    //Card HTML

// Create a function that generates an HTML card for Intern
    //Card HTML



module.exports = teamHTML;
