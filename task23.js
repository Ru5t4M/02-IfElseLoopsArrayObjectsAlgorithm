let students = [
    { name: "Ali", scores: [90, 85, 92] },
    { name: "Davud", scores: [100, 100, 100] },
    { name: "Mammal", scores: [75, 80, 85] },
    { name: "Camil", scores: [90, 95, 85] },
];

let avgs = [];

for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let total = 0;

    for (let a = 0; a < student.scores.length; a++) {
        total += student.scores[a];
    }

    let avg = total / student.scores.length;
    avgs.push(avg);
}

console.log(avgs);