import PropTypes from "prop-types"; // Import PropTypes
export default function FilterCategoryItem({
  categoriesData,
  activeIndex,
  _id,
}) {
  return (
    <section
      className={
        activeIndex === _id ? "filterCategory active" : "filterCategory"
      }
    >
      <div className="filter-image">
        <img src={categoriesData?.imgUrl?.data?.attributes?.url} alt="image-category"/>
      </div>
      <span>{categoriesData?.title}</span>
    </section>
  );
}

FilterCategoryItem.propTypes = {
  categoriesData: PropTypes.node.isRequired,
  activeIndex: PropTypes.node.isRequired,
  _id: PropTypes.node.isRequired,
};
