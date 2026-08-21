import React from 'react';

function App1() {
  // JavaScript variables and dynamic data
  const user = {
    name: 'Alex Johnson',
    role: 'Frontend Developer',
    isOnline: true,
    skills: ['React', 'JavaScript', 'CSS', 'Vite'],
    avatarUrl: 'https://i.pravatar.cc/150?img=6'
  };

  const handleAlert = () => {
    alert(`Connecting with ${user.name}...`);
  };

  return (
    // 1. Single Root Parent (Fragment syntax <>)
    <>
      <div className="card-container">
        {/* 2. Self-closing tags must have a closing slash */}
        <img 
          src={user.avatarUrl} 
          alt={user.name} 
          className="avatar" 
        />

        {/* 3. Embedding JS variables using curly braces {} */}
        <h1 style={{ color: '#2b2b2b', marginBottom: '4px' }}>{user.name}</h1>
        <p className="role">{user.role}</p>

        {/* 4. Conditional Rendering using Ternary Operators */}
        <p className="status">
          Status: {user.isOnline ? (
            <span style={{ color: 'green', fontWeight: 'bold' }}>Online</span>
          ) : (
            <span style={{ color: 'gray' }}>Offline</span>
          )}
        </p>

        <h3>Skills</h3>
        {/* 5. Rendering Lists using Array.map() with unique key props */}
        <ul className="skills-list">
          {user.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        {/* 6. Event Handling */}
        <button 
          onClick={handleAlert}
          style={{
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Connect
        </button>
      </div>
    </>
  );
}

export default App1;