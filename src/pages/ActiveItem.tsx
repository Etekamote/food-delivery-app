import { useItem } from "../lib/hooks";

type ActiveItemProps = {
  itemId: number;
};

function ActiveItem({ itemId }: ActiveItemProps) {
  const item = useItem(itemId);

  if (!item) {
    return (
      <div className="mt-8 text-center font-bold">
        We don't have that item :(
      </div>
    );
  }

  return <div>ActiveItem</div>;
}

export default ActiveItem;
