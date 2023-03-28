import { useState, useEffect } from "react";

export default function Register() {
  const [user, setUsername] = useState("");
  const [pass, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  useEffect(() => {});

  function handleSubmit(e) {
    e.preventDefault();
    if (pass === confirmpassword) {
      console.log("Submitted");
      console.log("Username: " + user);
      console.log("Password: " + pass);
    } else {
      console.log("Password not Matched");
    }
  }

  return (
    <div>
      <h1 className="register">
        Register
      </h1>

      <form className="frm" onSubmit={handleSubmit}>
        <input placeholder="Username" type="text" name="username"required value={user} onChange={(e) => setUsername(e.target.value)}/>
        {pass === confirmpassword ? (
          true
        ) : (
          <p className="passmatch">Password not Matched</p>
        )}
        <input placeholder="Password" type="password"required value={pass} onChange={(e) => setPassword(e.target.value)} />
        <input placeholder="Confirm Password" type="password"  required value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <button className="btn-register" type="submit"  >
          Register
        </button>
      </form>
    </div>
  );
}
