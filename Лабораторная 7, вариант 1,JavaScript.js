class Student {
    constructor(name, averageGrade) {
        this.name = name;
        this.averageGrade = averageGrade;
    }

    toString() {
        return `${this.name} (средняя оценка: ${this.averageGrade})`;
    }
}

function shellSortByAverageGrade(students) {
    const n = students.length;
    let gap = Math.floor(n / 2);

    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            const temp = students[i];
            let j = i;
          
            while (j >= gap && students[j - gap].averageGrade > temp.averageGrade) {
                students[j] = students[j - gap];
                j -= gap;
            }

            students[j] = temp;
        }
        gap = Math.floor(gap / 2);
    }

    return students;
}
