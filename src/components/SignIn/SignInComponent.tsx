import { useState } from "react";
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useUserStore } from "../../stores/userStore";

function SignInComponent() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const setUser = useUserStore((state) => state.setUser);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = query(
      collection(db, "usersDetails"),
      where("email", "==", formData.email),
      where("password", "==", formData.password)
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      setError("Invalid e-mail or password, try again.");
      return;
    }
    console.log(querySnapshot.docs[0].data());
    setUser({
      id: querySnapshot.docs[0].id,
      name: querySnapshot.docs[0].data().name,
      email: querySnapshot.docs[0].data().email,
      phone: querySnapshot.docs[0].data().phone,
      address1: querySnapshot.docs[0].data().address1,
      address2: querySnapshot.docs[0].data().address2,
      city: querySnapshot.docs[0].data().city,
      zipCode: querySnapshot.docs[0].data().zipCode,
    });
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
