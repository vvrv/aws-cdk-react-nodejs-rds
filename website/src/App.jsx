import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  // fetch users on mount
  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <>
      <div className="card">user count is {users.length}</div>
    </>
  );
}

export default App;
