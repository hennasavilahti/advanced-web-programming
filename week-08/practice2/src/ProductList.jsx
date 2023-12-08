import ProductListItem from './ProductListItem';

const ProductList = ({products}) => {
  return (
    <div>
      {products?.map((p) => <ProductListItem key={p.id} title={p.title} image={p.image} description={p.description}/>)}
    </div>
  )
};

export default ProductList;