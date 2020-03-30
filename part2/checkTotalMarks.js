function checTotalMarks(marks, exam) {
  if (exam) {
    return marks > 90;
  } else return marks >= 89 && marks <= 90;
}
console.log(checTotalMarks(89, true));
console.log(checTotalMarks(89, ""));
