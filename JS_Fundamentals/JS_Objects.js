let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for (let key in students){
        console.log("name:" + students[key].name + ", Cohort:" + students[key].cohort);
}


let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 for (let user in users){
     console.log(user.toUpperCase());
     for (let employee in users[user]){
        let num = Number(employee)+1;
        //  console.log(num);
        let name_len = users[user][employee].last_name.length + users[user][employee].first_name.length;
        console.log(num + "- "+ users[user][employee].last_name.toUpperCase()+", "+users[user][employee].first_name.toUpperCase()+ " - "+ name_len);
     }
 }


