function ProductInfo() {

  let product = {
    name: " Laptop",
    price: 1200,
    availability: "In stock"
  };
  return (
    <div>
      <h3>Product Info: </h3>
      <p>Product name: {product.name}</p>
      <p>Product price: {product.price}</p>
      <p>Product availability: {product.availability}</p>
    </div>
  )
}

export default ProductInfo;