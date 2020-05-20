const addStudents = (id, refreshCallback) => {
  refreshCallback();
};
function refreshStudentList() {
  console.log(`Hello`);
}
addStudents(2, refreshStudentList);
