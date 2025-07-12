
import { Link } from 'react-router-dom';
import './NavigationBar.css';

export default function NavigationBar({ user, onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">Skill Swap Platform</Link>
      </div>
      <div className="navbar-right">
        {user ? (
          <>
            <span className="navbar-user">{user.name}</span>
            <button className="navbar-logout" onClick={onLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/requests" className="navbar-link">Swap Requests</Link>
            <Link to="/login" className="navbar-link">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
}
