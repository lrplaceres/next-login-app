import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function LoginPage() {
  const router = useRouter();

  const [credenciales, setCredenciales] = useState({
    email: "",
    password: "",
  });

  const handlerChange = ({ target: { name, value } }) => {
    setCredenciales({ ...credenciales, [name]: value });
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", credenciales);
      if (response.status === 200) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input type="email" onChange={handlerChange} name="email" />
        <input type="text" onChange={handlerChange} name="password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
