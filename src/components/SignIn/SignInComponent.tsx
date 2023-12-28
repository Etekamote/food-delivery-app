import { useState } from "react";
import { useUserStore } from "../../stores/userStore";
import { useUser } from "../../lib/hooks";

function SignInComponent() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { user } = useUser(formData.email, formData.password);
  const [error, setError] = useState("");

  const setUser = useUserStore((state) => state.setUser);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user) {
      setUser(user);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <form
      className="flex-1 flex flex-col gap-8 items-center"
      onSubmit={handleSubmit}
    >
      <h3 className="text-orange-500 uppercase font-bold">Sign in</h3>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text"
        placeholder="email"
        name="email"
        className="w-1/2"
        onChange={handleInputChange}
        value={formData.email}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        className="w-1/2"
        onChange={handleInputChange}
        value={formData.password}
      />
      <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
        Sign in
      </button>
    </form>
  );
}

export default SignInComponent;
