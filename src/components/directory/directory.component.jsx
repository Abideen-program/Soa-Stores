import CategoryItems from "../category-items/category.component";
import "./directory.styles.scss";

const Directory = (props) => {
    const { categories } = props
    return (
      <div className="categories-container">
        {categories.map((category) => {
          const { id } = category
          return <CategoryItems category={category} key={id} />;
        })}
      </div>
    );
}

export default Directory