
let CollegeManagement = {
  CollegeName: "SVNIT",
  address: "Vesu Surat",
  classes: [
    {
      DepartmentName: "CSE",
      ProfessorName: "Dipti Verma Arora",
      students: [
        {
          studentName: "Shafquat Naaz",
          age: 23,
          grade: [
            {
              subject: "Javascript",
              marks: 85,
              grades: "A",
              assigment: [{ title: "Assignment 1" }, { title: "Assignment 2" }],
            },
            {},
          ],
        },
        {
          studentName: "Shafquat Naaz",
          age: 23,
          grade: [
            {
              subject: "C language",
              marks: 65,
              grades: "C",
              assigment: [{ title: "Assignment 1" }, { title: "Assignment 2" }],
            },
            {},
          ],
        },
      ],
    },
    {
      DepartmentName: "CSE",
      ProfessorName: "Ankit Sir",
      students: [
        {
          studentName: "Shafquat Naaz",
          age: 23,
          grade: [
            {
              subject: "DSA",
              marks: 85,
              grades: "A",
              assigment: [{ title: "Assignment 1" }, { title: "Assignment 2" }],
            },
            {},
          ],
        },
        {
          studentName: "Shafquat Naaz",
          age: 23,
          grade: [
            {
              subject: "AI",
              marks: 64,
              grades: "C",
              assigment: [{ title: "Assignment 1" }, { title: "Assignment 2" }],
            },
            {},
          ],
        },
      ],
    },
  ],
};

console.log(
  CollegeManagement.classes[0].students[1].grade[0]
);

