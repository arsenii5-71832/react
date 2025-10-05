function Profile({ name, role, avatarUrl }) {
    return (
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", textAlign: "center" }}>
        <img src={avatarUrl} alt={name} width="100" style={{ borderRadius: "50%" }} />
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    );
  }
  
  export default Profile;