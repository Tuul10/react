const employees = [
  {
    name: "Alice Johnson",
    position: "Software Engineer",
    salary: 95000,
    department: "Engineering",
    performanceRating: 4.7,
  },
  {
    name: "Bob Smith",
    position: "Product Manager",
    salary: 110000,
    department: "Product Management",
    performanceRating: 4.9,
  },
  {
    name: "Charlie Brown",
    position: "Data Analyst",
    salary: 80000,
    department: "Data Science",
    performanceRating: 4.5,
  },
  {
    name: "David Miller",
    position: "HR Specialist",
    salary: 75000,
    department: "Human Resources",
    performanceRating: 4.2,
  },
  {
    name: "Emily Davis",
    position: "Marketing Coordinator",
    salary: 85000,
    department: "Marketing",
    performanceRating: 4.8,
  },
];

const Page = () => {
  return (
    <div>
      {employees.map((employee, index) => (
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <div>{employee.name}</div>
          <div>{employee.position}</div>
          <div>{employee.department}</div>
          <div>{employee.salary}</div>``
          <div>{employee.performanceRating}</div>
        </div>
      ))}
    </div>
  );
};

export default Page;
