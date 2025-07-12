import { useState } from 'react';
import './ProfileDetail.css';

export default function ProfileDetail() {
  const [skillsOffered, setSkillsOffered] = useState('');
  const [skillsWanted, setSkillsWanted] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submit logic here
    alert('Request submitted!');
  };

  return (
    <div className="profile-detail-container">
      <h2>User Profile Detail</h2>
      <div className="profile-info">
        <div className="profile-photo">Profile Photo</div>
        <div className="profile-text">
          <p>Name: Marc Demo</p>
          <p>Skills Offered: UI Design, React</p>
          <p>Skills Wanted: Node.js</p>
          <p>Rating and Feedback: 4.5</p>
        </div>
      </div>
      <form className="request-form" onSubmit={handleSubmit}>
        <label>
          Choose one of your offered skills:
          <select value={skillsOffered} onChange={(e) => setSkillsOffered(e.target.value)}>
            <option value="">Select skill</option>
            <option value="UI Design">UI Design</option>
            <option value="React">React</option>
          </select>
        </label>
        <label>
          Choose one of their wanted skills:
          <select value={skillsWanted} onChange={(e) => setSkillsWanted(e.target.value)}>
            <option value="">Select skill</option>
            <option value="Node.js">Node.js</option>
          </select>
        </label>
        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
