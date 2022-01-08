function avg(data){
    // 請用你的程式補完這個函式的區塊
    var sum=0;
    var total=0;
    for (var i=0;i<data.count;i++){
        sum+=i
        total+=data.employees[i].salary;
    }
    console.log(total/data.count);
    
    }
    avg({
    "count":3,
    "employees":[
    {
    "name":"John",
    "salary":30000
    },
    {
    "name":"Bob",
    "salary":60000
    },
    {
    "name":"Jenny",
    "salary":50000
    }
    ]
    }); // 呼叫 avg 函式