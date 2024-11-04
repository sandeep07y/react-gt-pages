import { useEffect, useState } from "react";

// Correct type definition for User
type User = {
  id: number;
  name: string;
  email: string;
};

function UsersTable() {
  // State for storing the fetched user data
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      // Fetch user data from the API
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      setData(users); // Set the data in state
    }
    fetchUsers();
  }, []);

  let dataExpand = [...data]; // Create a copy of the data array
  dataExpand.map((data) => console.log(data.email)); // Access the name of the first user

  return (
    <>
      <h1>Hello</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </>
  );
}

export default UsersTable;
