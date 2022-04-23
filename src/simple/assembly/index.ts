import { Product, PartialProduct } from "./model";

export function createProduct(
  productCode: string, productType: string,productLine: string,density:u64,width: u64,lenght: u64,thickness:u64,produceUnit:u64,amountofUnits:u64,produtionDate:string
): Product {

  
  return Product.addProduct(productCode, productType,productLine,density ,width,lenght,thickness,produceUnit,amountofUnits,produtionDate);
}

export function getProductById(id: u32): Product {
  return Product.FindProductById(id);
}

export function getProducts(offset: u32, limit: u32 = 10): Product[] {
  return Product.GetAllProducts(offset, limit);
}

export function updateProduct(id: u32, updates: PartialProduct): Product {
  return Product.UpdateProductById(id, updates);
}

export function DelProduct(id: u32): void {
  Product.DeleteProductById(id);
}
