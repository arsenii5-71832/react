import Profile from "./Profile";

function App() {
  const users = [
    { name: "Alice Johnson", role: "Frontend Developer", avatarUrl: "https://i.pravatar.cc/100?img=1" },
    { name: "Bob Smith", role: "Backend Developer", avatarUrl: "https://i.pravatar.cc/100?img=2" },
    { name: "Charlie Brown", role: "UI/UX Designer", avatarUrl: "https://i.pravatar.cc/100?img=3" },
    { name: "Diana Prince", role: "Project Manager", avatarUrl: "https://i.pravatar.cc/100?img=4" },
    { name: "Ethan Hunt", role: "QA Engineer", avatarUrl: "https://i.pravatar.cc/100?img=5" },
    { name: "Fiona Adams", role: "DevOps Engineer", avatarUrl: "https://i.pravatar.cc/100?img=6" },
  ];

  return (
    <div>
      <h1>User Profiles</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {users.map((user, index) => (
          <Profile
            key={index}
            name={user.name}
            role={user.role}
            avatarUrl={user.avatarUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
