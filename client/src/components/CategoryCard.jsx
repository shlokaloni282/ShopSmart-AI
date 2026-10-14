function CategoryCard({ name, emoji }) {
  return (
    <div>
      <span>{emoji}</span>
      <h3>{name}</h3>
    </div>
  );
}

export default CategoryCard;
