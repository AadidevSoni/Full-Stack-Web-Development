type Employee = {
  id: number;
  name: string;
};

type Manager = {
  department: string;
  role: string;
};

// Create an intersection type
type ManagerWithEmployeeInfo = Employee & Manager;

// Example usage
const manager: ManagerWithEmployeeInfo = {
  id: 123,
  name: "John Doe",
  department: "Engineering",
  role: "Team Lead",
};

console.log(manager.id); 
console.log(manager.name); 
console.log(manager.department); 
console.log(manager.role); 