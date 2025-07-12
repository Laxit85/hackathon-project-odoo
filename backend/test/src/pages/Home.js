import { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch users from backend API
    axios.get('/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        setError('Failed to fetch users');
        console.error(error);
      });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Skill Swap Platform</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid gap-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded-lg bg-white shadow">
            <div className="flex items-center">
              <img src={user.profilePhoto || 'https://via.placeholder.com/50'} alt={user.name} className="rounded-full w-12 h-12 mr-4" />
              <div>
                <h3 className="font-semibold">{user.name}</h3>
                <p>Rating: {user.rating}</p>
                <p>Skills: {user.skillsOffered?.join(', ')}</p>
              </div>
              <button className="ml-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Request
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
