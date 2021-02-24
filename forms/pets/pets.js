let petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']
let withSal = petNames
let sal = 'Sal'
petNames.push(sal)
withSal.push(sal) 
console.log(petNames)
console.log(withSal)
console.log(`The third pet is named ${petNames[2]}`)
console.log(`The array has ${petNames.length} names in it.`)
petNames.pop()