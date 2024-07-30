import { Product } from "../models/product";

export const addProduct = (producs: Product[], newProduct: Product) => {
	return [...producs, newProduct];
}

export const removeProduct = (products: Product[], productId: number) : Product[] => {
	return products.filter((product) => product.id !== productId);
}

export const updateProduct = (products: Product[], updatedProduct: Product) : Product[] => {
	return products.map((product) => product.id === updatedProduct.id ? updatedProduct : product);
}

export const getProduct = (products: Product[]) : Product[] => {
	return products;
}