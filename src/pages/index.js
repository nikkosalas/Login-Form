import Login from "./components/login";
import Register from "./components/register";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState("login");

  function changePage(page) {
    setPage(page);
  }

  return (
    <div>
        <h1 className="simple">
          Login Form
        </h1>
      <div className="btn">
        <button onClick={() => changePage("login")} >
          Login
        </button>
        <button onClick={() => changePage("register")} >
          Register
        </button>
      </div>
      <div className="flex justify-center space-x-2">
        {page === "login" && <Login />}
        {page === "register" && <Register />}
      </div>
    </div>
  );
}
