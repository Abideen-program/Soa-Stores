import './category.styles.scss'
const CategoryItems = (props) => {
  //destructuring title, and imageUrl from the props
    const { title, imageUrl } = props.category;

    return (
        <div className="category-container">
            <div
              className="background-image"
              style={{
                backgroundImage: `url(${imageUrl})`,
              }}
            />
            <div className="category-title-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
    )
}

export default CategoryItems