type GroceryItem = {
  item: string;
};

type GroceryListProps = {
  groceryListItems: GroceryItem[];
};

export const GroceryList = ({ groceryListItems }: GroceryListProps) => {
  return (
    <div>
      {groceryListItems.length > 0 ? (
        <ul>
          {groceryListItems.map((groceryListItem, index) => (
            <li key={index}>{groceryListItem.item}</li>
          ))}
        </ul>
      ) : (
        <p>No grocery items yet.</p>
      )}
    </div>
  );
};
