import { Product, PartialProduct,productListStorage } from "./model";
import { storage, Context, context, ContractPromiseBatch, u128 } from "near-sdk-as"

export function createProduct(
  productCode: string, productType: string,productLine: string,density:u64,width: u64,lenght: u64,thickness:u64,produceUnit:u64,amountofUnits:u64,produtionDate:string
): Product {
  assert_IsShift()
  let id = storage.getSome<u32>("currentID")
  storage.set("currentID", id + 1)
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
export function SaveProduct(productCode: string, productType: string,productLine: string,density:u64,width: u64,lenght: u64,thickness:u64,produceUnit:u64,amountofUnits:u64,produtionDate:string):string
{
  const product= new Product(productCode, productType,productLine,density ,width,lenght,thickness,produceUnit,amountofUnits,produtionDate);
  productListStorage.push(product);  
    return "added product to chain"
}
const limitProducts= 10;
export function getFromChainData():Product[]{
  const numProducts=min(limitProducts,productListStorage.length);
  const startIndex=productListStorage.length-numProducts;
  const list= new Array<Product>(numProducts);
  for (let i=0;i<numProducts;i++)
  {
    list[i]=productListStorage[i+startIndex];
  }
  return list;
}
export function Saveshift(): void {
  assert_shift()
  storage.setString("shift", context.sender)
  storage.set("currentID", 0)
}

function assert_shift(): void {
  assert(!storage.hasKey("shift"), "Shift initialized before!")
}
function assert_IsShift(): void {
  assert(context.predecessor == storage.getString("shift"), "Only shift may call this function!")
}