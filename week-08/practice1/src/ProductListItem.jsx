import './ProductListItem.css';

const ProductListItem = ({title, image, description}) => {

return (
    <li className="product__list-item">
      <img className="product__list-item__image" src={image}></img>
      <section className='product__list-item__section'>
        <h3>{title}</h3>
        <p>{description}</p>
      </section>
    </li>
  )
};

export default ProductListItem;