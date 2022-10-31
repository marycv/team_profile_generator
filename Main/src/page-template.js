const managerList = []
const engineerList = []
const internList = []

// Create a function that takes the employeeList array, split by the .getRole method
const employeesByRole = (employeeList) => {
  employeeList.forEach((element) => {
    if (element.getRole() === 'Manager') {
      // Push to empty managerList array
      managerList.push(element)
    } else if (element.getRole() === 'Engineer') {
      // Push to empty engineerList array
      engineerList.push(element)
    } else {
      // Push to internList array
      internList.push(element)
    }
  });
};

// Create a function to make the card HTML
const makeCard = (data) => {
  return `
    <div class="card col-md-3 m-2 bg-white text-black">
        <div class="card-body">
            <h3 class="card-title py-2">${data.name}</h3>
            <ul class="list-group">
                <li class="list-group-item">ID-${data.id}</li>
                <li class="list-group-item">${data.email}</li>
                <li class="list-group-item">${() => {
                    if (data.officeNumber) {
                        return data.officeNumber
                    } else if (data.github) {
                        return data.github
                    } else {
                        return data.school
                    }
                }}
                </li>
            </ul>
        </div>
    </div>`
};

// Create a function to get card data from managerList, engineerList, and internList at push through makeCard function
const getCards = () => {
  var string = ''
  managerList.forEach((employee) => (string += makeCard(employee)))
//   console.log('string after managerList')
//   console.log(string)
  engineerList.forEach((employee) => (string += makeCard(employee)))
//   console.log('String after engineer')
//   console.log(string)
  internList.forEach((employee) => (string += makeCard(employee)))
//   console.log('String after intern')
//   console.log(string)
  return string
};

const teamHTML = (employeeList) => {
  employeesByRole(employeeList)
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
            
            <!-- Call the getCards function -->
            ${getCards()}        
        </body>
    </html>
     `
};

module.exports = teamHTML
