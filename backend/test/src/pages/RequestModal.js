import { useState } from 'react';
import './RequestModal.css';

export default function RequestModal({ isOpen, onClose, onSubmit }) {
  const [offeredSkill, setOfferedSkill] = useState('');
  const [wantedSkill, setWantedSkill] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ offeredSkill, wantedSkill, message });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Request Skills Swap</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Choose one of your offered skills:
            <select value={offeredSkill} onChange={(e) => setOfferedSkill(e.target.value)} required>
              <option value="">Select skill</option>
              <option value="UI Design">UI Design</option>
              <option value="React">React</option>
            </select>
          </label>
          <label>
            Choose one of their wanted skills:
            <select value={wantedSkill} onChange={(e) => setWantedSkill(e.target.value)} required>
              <option value="">Select skill</option>
              <option value="Node.js">Node.js</option>
            </select>
          </label>
          <label>
            Message:
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
          </label>
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose} className="modal-close-button">Cancel</button>
        </form>
      </div>
    </div>
  );
}
