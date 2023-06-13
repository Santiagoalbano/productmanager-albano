
 
  const productManager = new ProductManager();
  console.log(productManager.getProducts()); // Devuelve []
  
  productManager.addProduct("Camiseta", "Camiseta de algodón", 19.99, "imagen.jpg", "C001", 10);
  console.log(productManager.getProducts()); // Devuelve el producto recién agregado
  
  // Intentar agregar un producto con el mismo código
  try {
    productManager.addProduct("Pantalón", "Pantalón vaquero", 29.99, "imagen2.jpg", "C001", 5);
  } catch (error) {
    console.log(error.message); // Imprime el mensaje de error
  }
  
  // Obtener un producto por ID
  const product = productManager.getProductById(1);
  console.log(product); // Imprime el producto encontrado
  
  // Intentar obtener un producto con un ID inexistente
  try {
    const nonExistentProduct = productManager.getProductById(99);
  } catch (error) {
    console.log(error.message); // Imprime el mensaje de error
  }