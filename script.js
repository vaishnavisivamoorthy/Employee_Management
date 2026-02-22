let employees=[];

//creating an object employee to add data and store it in array employees
function addEmployee(Name,desig,salary){
    let employee={
        Name:Name.trim(),
        Desig:desig.trim(),
        Salary:Number(salary)
    };
    employees.push(employee);
};

//Validating the form
document.getElementById("emp_form").addEventListener("submit",
    function(event){
        event.preventDefault();

        let Name=document.getElementById("Name").value;
        let Desig=document.getElementById("desig").value;
        let Salary=document.getElementById("salary").value;

        //Validate the input values
        if ((Name=="")|| (Desig=="")||(Salary=="")){
            alert("All fields are required to fill");
        }
        else{
        addEmployee(Name,Desig,Salary);
        alert("Your data is added successfully");
        }
    }
);

function employeeShow(){
    if(employees.length==0){
        document.getElementById("output").innerHTML="No records found ";
        return;
    }
    let output="";
    for(let emp of employees){
        let {Name,Desig,Salary}=emp;
        output+=`Name:${Name.toUpperCase()} | Designation:${Desig.toUpperCase()} |Salary:${Salary}<br>`;
    }
    document.getElementById("output").innerHTML=`Employees Details:<br>${output}`;
};

function avgsal(){
    if(employees.length==0){
        document.getElementById("output").innerHTML="No records found to get average value";
        return;
    }
    let total_sal=employees.map(s=>s.Salary);
    let sum_sal=total_sal.reduce((sum,sal)=> sum+sal,0);
    let avg_sal=employees.length>0 ? sum_sal/employees.length : 0;
    document.getElementById("output").innerHTML=`Average Salary of All employees is ${avg_sal}`;

}

function deleteEmployee(){
    if(employees.length==0){
        document.getElementById("output").innerHTML="No records found to be deleted";
        return;
    }
    let deleteData=employees.pop();
    document.getElementById("output").innerHTML=`The Deleted Data From Employee is <br> ${deleteData.Name}|${deleteData.Desig}|${deleteData.Salary}`;
}

//salary details greater than given amount
function empSalHigh(...Salary){
    if(employees.length==0){
        document.getElementById("output").innerHTML="No records found ";
        return;
    }
    
    let amt=prompt("enter The amount value you need to check for employee details:");
    let amount=parseInt(amt);
    let high=employees.filter(emp=>emp.Salary>amount);
    
    document.getElementById("output").innerHTML=high.map(emp => `The employee's whose salary is greather than ${amount} are<br>Name: ${emp.Name} | Designation:${emp.Desig}|Salary: ${emp.Salary}`).join("<br>");
    
}


function loadAPI(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>{
            let text="";
            data.forEach(user=>{
                text+=`User: ${user.name}<br>`;
            });

            document.getElementById("output").innerHTML=`API call of employee names:<br>${text}`;
        });
    }

    //convert json to object and object to json
function JSONtoObject(){
    let jsondata=JSON.stringify(employees);
    console.log(jsondata);
    let parsedata=JSON.parse(jsondata);
    console.log(parsedata);
    copyEmployee()
    alert("Check your Output in Console");
}
//spread
function copyEmployee(){
    let copyEmp=[...employees]
    console.log("Copied Employee:",copyEmp);
}