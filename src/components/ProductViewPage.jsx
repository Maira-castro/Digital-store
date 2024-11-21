import { useParams } from "react-router-dom";

const ProductViewPage = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Produto não encontrado!</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Preço: R$ {product.price}</p>
      {product.priceDiscount && <p>Promoção: R$ {product.priceDiscount}</p>}
      <p>Categoria: {product.category}</p>
    </div>
  );
};

export default ProductViewPage;
