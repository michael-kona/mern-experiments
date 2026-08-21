import React, { Component } from 'react';

// 1. Functional Child Component
function UserBadge({ role }) {
  return (
    <span style={{ 
      background: '#e0f2fe', 
      color: '#0369a1', 
      padding: '4px 8px', 
      borderRadius: '4px',
      fontSize: '12px' 
    }}>
      {role}
    </span>
  );
}

// 2. Class Child Component
class UserHeader extends Component {
  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <h2>{this.props.name}</h2>
        {/* Nesting the Functional Badge inside a Class Component */}
        <UserBadge role={this.props.role} />
      </div>
    );
  }
}

// 3. Parent Component (Nesting all components together)
function UserCard() {
  const userData = {
    name: 'Sarah Connor',
    role: 'Admin',
    email: 'sarah@example.com'
  };

  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '16px', 
      borderRadius: '8px', 
      maxWidth: '300px' 
    }}>
      {/* Nesting Class Component */}
      <UserHeader name={userData.name} role={userData.role} />
      <p style={{ color: '#666' }}>Email: {userData.email}</p>
    </div>
  );
}

export default UserCard;