import { useState } from 'react';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotForm, setShowForgotForm] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [name, setName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert('Login submitted');
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
    alert(`Password recovery instructions sent to ${forgotEmail}`);
    setShowForgotForm(false);
    setForgotEmail('');
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    // Handle sign up logic here
    alert(`Sign Up submitted for ${name} with email ${signUpEmail}`);
    setShowSignUpForm(false);
    setName('');
    setSignUpEmail('');
    setSignUpPassword('');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {!showSignUpForm ? (
        <>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account?{' '}
            <button
              type="button"
              className="signup-link"
              onClick={() => setShowSignUpForm(true)}
            >
              Sign Up
            </button>
          </p>
          {!showForgotForm ? (
            <p>
              <button
                type="button"
                className="forgot-link"
                onClick={() => setShowForgotForm(true)}
              >
                Forgot username or password?
              </button>
            </p>
          ) : (
            <form onSubmit={handleForgotSubmit} className="forgot-form">
              <label htmlFor="forgotEmail">Enter your email to recover password:</label>
              <input
                type="email"
                id="forgotEmail"
                name="forgotEmail"
                required
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
              />
              <button type="submit">Send Recovery Email</button>
              <button type="button" onClick={() => setShowForgotForm(false)}>Cancel</button>
            </form>
          )}
        </>
      ) : (
        <>
          <h2>Sign Up</h2>
          <form onSubmit={handleSignUpSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="signUpEmail">Email:</label>
            <input
              type="email"
              id="signUpEmail"
              name="signUpEmail"
              required
              value={signUpEmail}
              onChange={(e) => setSignUpEmail(e.target.value)}
            />
            <label htmlFor="signUpPassword">Password:</label>
            <input
              type="password"
              id="signUpPassword"
              name="signUpPassword"
              required
              value={signUpPassword}
              onChange={(e) => setSignUpPassword(e.target.value)}
            />
            <button type="submit">Sign Up</button>
            <button type="button" onClick={() => setShowSignUpForm(false)}>Cancel</button>
          </form>
        </>
      )}
      </div>
  );
}
