export function itemsGenerator(name: string) {
  const items = [];
  for (let i = 0; i < 10; i++) {
    items.push({
      id: i,
      name: `${name}`,
      price: Math.floor(Math.random() * 10) + 1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, aperiam",
      image: "",
      addons: [],
      category: name,
    });
  }

  return items;
}
