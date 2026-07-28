function showCourses() {
  fetch("http://localhost:8080/courses")
    .then((response) => response.json())
    .then((courses) => {
      const dataTable = document.getElementById("coursetable");

      // Clear existing rows before adding new ones
      dataTable.innerHTML = "";

      courses.forEach((course) => {
        var row = `<tr>
            <td>${course.id}</td>
            <td>${course.courseName}</td>
            <td>${course.instructor}</td>
            <td>${course.description}</td>
        </tr>`;

        dataTable.innerHTML += row;
      });
    });
}

function showEnrolledStudents() {
  fetch("http://localhost:8080/courses/enrolled")
    .then((response) => response.json())
    .then((students) => {
      const dataTable = document.getElementById("enrolledtable");
      dataTable.innerHTML = "";

      students.forEach((student) => {
        var row = `<tr>
            <td>${student.name}</td>
            <td>${student.emailId}</td>
            <td>${student.course.courseName}</td>
        </tr>`;

        dataTable.innerHTML += row;
      });
    });
}
