def avg(data):
    total=0
    mycount=data["count"]
    for n in range(mycount):
        total+=data["employees"][n]["salary"]
    print("平均薪資=",total/mycount)   

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
}) # 呼叫 avg 函式
