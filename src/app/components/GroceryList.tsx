export default function GroceryList({ groceryListItems }) {
  return (
    <div>
      {groceryListItems.length > 0 ? (
        <ul>
          {groceryListItems.map((groceryListItem, index) => (
            <li key={index}>{groceryListItem}</li>
          ))}
        </ul>
      ) : (
        <p>No Grocery Items Yet.</p>
      )}
    </div>
  );
}
