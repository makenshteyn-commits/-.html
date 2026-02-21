const student = {
    surname: "Перепелов",
    name: "Андрей",
    marks: [
        { subject: "Русский", mark: 4 },
        { subject: "Математика", mark: 5 },
        { subject: "Литература", mark: 3 }
    ]
};
function printStudentInfo(student) {
    console.log(`Студент: ${student.surname} ${student.name}`);
    console.log("Оценки:");
    student.marks.forEach(mark => {
        console.log(`Предмет: ${mark.subject}, Оценка: ${mark.mark}`);
    });
}
class Student {
    constructor(surname, name) {
        this.surname = surname;
        this.name = name;
        this.marks = ;
    }
  class Mark {
    constructor(subject, mark) {
        this.subject = subject;
        this.mark = mark;
    }
}
 getAverageMark() {
        return this.marks.reduce((sum, mark) => sum + mark.mark, 0) / this.marks.length;
    }
  getMarksBySubject(subject) {
        return this.marks.filter(mark => mark.subject === subject);
    }
 addMark(subject, mark) {
        const newMark = { subject, mark };
        this.marks.push(newMark);
    }
 removeMarksBySubject(subject) {
        this.marks = this.marks.filter(mark => mark.subject !== subject);
    }
}
