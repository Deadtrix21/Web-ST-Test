let Employees = [{
    id: 1123,
    department: 'Sales',
    ['basic salary']: 10000,
    commission: 3000,
},
{
    id: 1223,
    department: 'HR',
    ['basic salary']: 91000,
    commission: 1,
},
{
    id: 1323,
    department: 'IT',
    ['basic salary']: 12000,
    commission: 33000,
},
{
    id: 1423,
    department: 'Support',
    ['basic salary']: 10000,
    commission: 1000,
},
{
    id: 1523,
    department: 'HR',
    ['basic salary']: 91000,
    commission: 0,
},
{
    id: 1623,
    department: 'Sales',
    ['basic salary']: 91000,
    commission: 2300,
},
];
/*
 {
    id: 1123,
    department: 'Sales',
    ['basic salary']: 10000,
    commission: 3000,
} 
*/
function run(ARRAY) {
    // Variables
    let SALES = [];
    let SUPPORT = [];
    let IT = [];
    let HR = [];
    var temp;
    var spliter = "******************************"
    // Main methods
    function split() {
        ARRAY.forEach(element => {
            temp = element.department
            if(temp == "Sales")     {SALES.push     (element)}
            if(temp == "HR")        {HR.push        (element)}
            if(temp == "IT")        {IT.push        (element)}
            if(temp == "Support")   {SUPPORT.push   (element)}
        });
    }
    split();
    
    // methods
    function display(value) 
    {   
        console.log(spliter);
        console.log(value.Department)
        console.log(spliter);
        console.log("TOTAL:" +"".padEnd(5)+value.TotalSalary)
        console.log(" ")
    }
    function foreachDepartment(arr)
    {
        var totalSalary = 0
        var commission = 0
        var basic = 0
        var department;
        arr.forEach(element => {
            commission += element.commission
            basic += element['basic salary']
            department = element.department
        });
        totalSalary = basic + commission
        return {
            TotalSalary : totalSalary,
            Department: department
        }
    }
    //processing
    function process() {
        display(foreachDepartment(SALES))
        display(foreachDepartment(HR))
        display(foreachDepartment(IT))
        display(foreachDepartment(SUPPORT))
    }
    process()
}
run(Employees)
