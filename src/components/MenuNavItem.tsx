type MenuNavItemProps = {
  active: boolean;
  children: React.ReactNode;
  setCurrentItems: React.Dispatch<React.SetStateAction<string>>;
};

function MenuNavItem({ active, setCurrentItems, children }: MenuNavItemProps) {
  const handleClick = () => setCurrentItems(children as string);

  return (
    <li className="uppercase text-white relative px-8" onClick={handleClick}>
      {children}
      <span
        className={` absolute w-full h-1 bg-white left-0 -bottom-2 transition-opacity ease-in-out   ${
          active ? "opacity-100" : "opacity-0"
        } `}
      ></span>
    </li>
  );
}

export default MenuNavItem;
