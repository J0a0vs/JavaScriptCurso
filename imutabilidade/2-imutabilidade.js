const students = [
    {
        name: 'Grace',
        grade: 7
    },
    {
        name: 'Jannifer',
        grade: 4
    },
    {
        name: 'Paul',
        grade: 10
    }
];

function getApprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados:');
console.log(getApprovedStudents(students));

console.log('\nLista de aluno:')
console.log(students)

    
