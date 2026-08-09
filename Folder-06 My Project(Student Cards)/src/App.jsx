import Student from './components/Student.jsx'

const App = () => {

  const studentData = [
  {
    name: "Aditya",
    age: 20,
    course: "CSE"
  },
  {
    name: "Ritesh",
    age: 21,
    course: "AIML"
  },
  {
    name: "Chetan",
    age: 20,
    course: "DS"
  },
  {
    name: "Rohit",
    age: 21,
    course: "CSE"
  },
  {
    name: "Pratik",
    age: 20,
    course: "AIML"
  }
];
  return (
    <div className="parent">
  {studentData.map(function(student, idx) {
    return (
      <Student
        key={idx}
        name={student.name}
        age={student.age}
        course={student.course}
      />
    );
  })}
</div>
  )
}

export default App
