export default function Menu({ menuItems }) {
  return (
    <div>
      {menuItems.length > 0 ? (
        <ul>
          {menuItems.map((menuItem, index) => (
            <li key={index}>menuItem</li>
          ))}
        </ul>
      ) : (
        <p>No Menu Items</p>
      )}
    </div>
  );
}
