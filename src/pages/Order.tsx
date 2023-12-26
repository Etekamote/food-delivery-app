import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
function Order() {
  const items = [
    {
      id: "QOrX52BdXYM8BrdQrMmM",
      addons: [1, 2, 3],
      price: 12.99,
    },
    {
      id: "QOrX52BdXYM8BrdQrMmM",
      addons: [1, 2, 3],
      price: 12.99,
    },
  ];

  const totalPrice = items.reduce((acc, currentItem) => {
    return acc + currentItem.price;
  }, 0);

  const handleClick = async () => {
    const docRef = await addDoc(collection(db, "orders"), {
      userId: 0,
      date: new Date().getTime(),
      deliveryDate: new Date().getTime() + 3600,
      done: false,
    });

    const itemsSubCollection = collection(docRef, "items");

    items.forEach(async (item) => {
      await addDoc(itemsSubCollection, item);
      console.log("added item");
    });
  };

  return <button onClick={handleClick}>Add</button>;
}

export default Order;
