const GPA_BENCHMARK = 3.5

let students = {
    1: {
        name: 'Amit',
        gpa: 3.4
    },
    2: {
        name: 'Anuj',
        gpa: 3.3
    },
    3: {
        name: 'govind',
        gpa: 3.7
    },
    4: {
        name: 'Aman',
        gpa: 3.9
    }
}

try {
    let gpamarks = Object.values(students).filter(students => {
        return students.gpa >= GPA_BENCHMARK;
    });
    console.log(gpamarks)
}
catch (err) {
    console.log(err)
}