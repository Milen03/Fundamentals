function employees(arr){
for (const employeesLeng of arr) {
    let personalNumber=employeesLeng.length

    let employee={
        name:employeesLeng,
        personalNum:personalNumber
    }

    console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNum}`);
}
}
employees([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])