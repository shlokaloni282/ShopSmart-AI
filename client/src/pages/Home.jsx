import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home() {
  return (
    <>
      <Hero />

      <section>
        <h2>Shop by Category</h2>

        <CategoryCard name="Electronics" emoji="💻" />
        <CategoryCard name="Fashion" emoji="👕" />
        <CategoryCard name="Beauty" emoji="💄" />
      </section>

      <section>
        <h2>Featured Products</h2>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
