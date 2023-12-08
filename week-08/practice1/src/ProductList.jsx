import ProductListItem from './ProductListItem';

import './ProductList.css';

const ProductList = ({products}) => {
  return (
    <div className='product__list'>
      {products?.map((p) => <ProductListItem key={p.id} title={p.title} image={p.image} description={p.description}/>)}
    </div>
  )
};

export default ProductList;