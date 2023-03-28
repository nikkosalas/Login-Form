import { useState } from "react";

export default function Login() {
  const [user, setUsername] = useState("");
  const [pass, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
    console.log("Username: " + user);
    console.log("Password: " + pass);

    alert("Username: " + user);
  }

  return (
    <div>
      <h1 className="login">
        Login
      </h1>

      <form className="frm" onSubmit={handleSubmit}>
        <input placeholder="Username"  type="text"  name="username"  required value={user} onChange={(e) => setUsername(e.target.value)}
        />
        <input placeholder="Password"type="password" name="password" required value={pass} onChange={(e) => setPassword(e.target.value)} />
        <button className="btn-log" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
