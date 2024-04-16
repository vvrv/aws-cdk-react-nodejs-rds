import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const API_HOST = import.meta.env.VITE_API_URL;

  // fetch users on mount
  useEffect(() => {
    fetch(`${API_HOST}/api/users`)
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, [API_HOST]);

  return (
    <>
      <div className="card">user count is {users.length}</div>
    </>
  );
}

export default App;
