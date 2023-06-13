
class ProductManager {
    constructor() {
      this.products = [];
      this.lastProductId = 0;
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(title, description, price, photo, code, stock) {
      const existingProduct = this.products.find(product => product.code === code);
      if (existingProduct) {
        throw new Error("El código de producto ya existe. Por favor, ingresa un código único.");
      }
  
      const productId = this.generateProductId();
      const newProduct = {
        id: productId,
        title: title,
        description: description,
        price: price,
        photo: photo,
        code: code,
        stock: stock
      };
  
      this.products.push(newProduct);
    }
  
    getProductById(productId) {
      const product = this.products.find(product => product.id === productId);
      if (!product) {
        throw new Error("No se encontró ningún producto con el ID especificado.");
      }
  
      return product;
    }
  
    updateProduct(productId, updatedFields) {
      const product = this.getProductById(productId);
      Object.assign(product, updatedFields);
    }
  
    deleteProduct(productId) {
      const productIndex = this.products.findIndex(product => product.id === productId);
      if (productIndex === -1) {
        throw new Error("No se encontró ningún producto con el ID especificado.");
      }
  
      this.products.splice(productIndex, 1);
    }
  
    generateProductId() {
      this.lastProductId++;
      return this.lastProductId;
    }
  }
  
