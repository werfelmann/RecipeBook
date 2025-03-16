export default function RecipeList({ recipes }) {
  return (
    <div>
      {recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>{recipe}</li>
          ))}
        </ul>
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
}
