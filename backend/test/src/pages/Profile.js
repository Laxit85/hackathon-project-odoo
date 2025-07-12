import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Location:</label>
        <input type="text" name="location" />
        <label>Skills Offered:</label>
        <input type="text" name="skillsOffered" />
        <label>Skills Wanted:</label>
        <input type="text" name="skillsWanted" />
        <label>Availability:</label>
        <input type="text" name="availability" />
        <label>Profile Photo URL:</label>
        <input type="text" name="profilePhoto" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
