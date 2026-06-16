const API =
'http://localhost:5000/api/students';

const form =
document.getElementById(
'studentForm'
);

const table =
document.getElementById(
'studentTable'
);

loadStudents();

form.addEventListener(
'submit',
async(e)=>{

e.preventDefault();

const student = {

name:
document.getElementById('name').value,

department:
document.getElementById('department').value,

email:
document.getElementById('email').value,

phone:
document.getElementById('phone').value

};

await fetch(API,{
method:'POST',
headers:{
'Content-Type':
'application/json'
},
body:JSON.stringify(student)
});

form.reset();

loadStudents();

});

async function loadStudents(){

const response =
await fetch(API);

const students =
await response.json();

table.innerHTML='';

students.forEach(student=>{

table.innerHTML += `
<tr>

<td>${student.name}</td>
<td>${student.department}</td>
<td>${student.email}</td>
<td>${student.phone}</td>

<td>

<button
onclick="deleteStudent(
'${student._id}'
)">
Delete
</button>

</td>

</tr>
`;

});

}

async function deleteStudent(id){

await fetch(
`${API}/${id}`,
{
method:'DELETE'
}
);

loadStudents();

}