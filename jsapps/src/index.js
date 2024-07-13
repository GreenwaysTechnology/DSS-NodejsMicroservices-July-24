let numberList = [1, 2, 3, 4, 5, 6];
//iterators
numberList.forEach(value => {
    console.log(value)
})

let employeeList = [
    {
        id: 1,
        name: 'Ram'
    },
    {
        id: 2,
        name: 'Subramanian'
    },
    {
        id: 1,
        name: 'Kumar'
    }
]
employeeList.forEach(emp=>{
    console.log(emp.id,emp.name)
})
