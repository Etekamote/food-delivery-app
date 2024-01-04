import { useState } from "react";
import { useUserStore } from "../../stores/userStore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import Loading from "../Loading";

const SignInComponent = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const setUser = useUserStore((state) => state.setUser);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      const q = query(
        collection(db, "usersDetails"),
        where("email", "==", email),
        where("password", "==", password)
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setError("Invalid email or password");
      } else {
        const userData = querySnapshot.docs[0].data();
        const { id, name, email, address1, address2, city, zipCode, phone } =
          userData;
        setUser({ id, name, email, address1, address2, city, zipCode, phone });

        setError("");
      }
    } catch (error) {
      console.error("Error fetching data:", error);

      setError("There was an error signing in");
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError("Please provide both email and password");
      return;
    }

    await handleSignIn(email, password);
  };

  if (loading) {
    return <Loading />;
  }

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
};

export default SignInComponent;
