import { useState } from "react";

function App() {
  const [theme] = useState("teal");
  const user = { name: "Ava", avatarUrl: "https://i.pravatar.cc/96?u=ava" };
  return <Profile user={user} theme={theme} />;
}

function Profile({ user, theme }) {
  return <UserCard user={user} theme={theme} />;
}

function UserCard({ user, theme }) {
  return <Avatar url={user.avatarUrl} name={user.name} theme={theme} />;
}

function Avatar({ url, name, theme }) {
  return (
    <div style={{ border: `4px solid ${theme}`, padding: 8, display: "inline-flex", alignItems: "center", gap: 8 }}>
      <img src={url} alt={name} width={48} height={48} style={{ borderRadius: "50%" }} />
      <span>{name}</span>
    </div>
  );
}

export default App;
