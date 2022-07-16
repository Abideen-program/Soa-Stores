import CategoryItems from "../category-items/category.component";
import "./directory.styles.scss";

const Directory = (props) => {
    const { categories } = props
    return (
        <div className="wrapper">
      <h1 className="brand-name">SOA Clothing Store</h1>
      <p className="slogan">Your No 1. online female clothing store</p>
      <div className="categories-container">
        {categories.map((category) => {
          const { id } = category
          return <CategoryItems category={category} key={id} />;
        })}
      </div>
    </div>
    );
}

export default Directory