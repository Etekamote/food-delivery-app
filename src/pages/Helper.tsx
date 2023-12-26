import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";

function Helper() {
  const handleClick = async () => {
    // await setDoc(doc(db, "food", "LA"), {
    //     name: "Los Angeles",
    //     state: "CA",
    //     country: "USA"
    //   });
    for (let i = 0; i < 5; i++) {
      try {
        await setDoc(doc(db, "addons", `${i}`), {
          id: i,
          name: `Addon ${i}`,
          price: 2.99,
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  return <button onClick={handleClick}>ADD</button>;
}

export default Helper;
