import React from 'react';
import './homepage.scss';


interface Props {
  onLogin: () => void;
}

function HomePage(props: Props) {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    props.onLogin();
  }

  return (
    <div className="homepage-container">
      <h1>Welcome to Mama Care App</h1>
      <p>Designed for blind mothers and all expecting mothers.</p>
      
      <form onSubmit={handleLogin}>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default HomePage;

