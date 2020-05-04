interface ProductDAO {
    getAllProducts(): void;
    saveProduct(): Product;
    deleteProduct(): Product;   
}