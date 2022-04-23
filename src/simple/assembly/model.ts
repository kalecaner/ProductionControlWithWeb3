import {
    PersistentUnorderedMap,
    math,
    PersistentVector,
    Context,
    u128,
  } from "near-sdk-as";
  type AccountId = string;
  @nearBindgen
  export class Product {
    id: u32;
    shift: AccountId = Context.sender;
    productCode: string;
    productType: string;
    productLine: string;
    density:u64; // unit kg/m3
    width: u64; //unit  millimeter
    lenght: u64; //unit  millimeter
    thickness: u64;//unit  millimeter
    amountofUnits:u64; //unit number
    produceUnit:u64; //unit palette
    productionTonnage:u64; //unit kg
    produtionDate:string;//dd-mm-yyyy

  
    constructor(productCode: string, productType: string,productLine: string,density:u64,width: u64,lenght: u64,thickness: u64,amountofUnits:u64,produtionDate:string) {
      this.id = math.hash32<string>(productCode);
      this.productCode = productCode;
      this.productType = productType;
      this.productLine = productLine;
      this.density = density;
      this.width = width;
      this.lenght = lenght;
      this.produtionDate = produtionDate;
      this.amountofUnits = amountofUnits;
      this.productionTonnage =density*(width/1000)*(lenght/1000)*(thickness/1000);

      

    }
    static addProduct(productCode: string, productType: string,productLine: string,density:u64,width: u64,lenght: u64,thickness: u64,amountofUnits:u64,produtionDate:string): Product {
        const product = new Product(productCode, productType,productLine,density,width,lenght,thickness,amountofUnits,produtionDate);
        products.set(product.id, product);
    
        return product;

      }
      static FindProductById(id: u32): Product {
        return products.getSome(id);
      }
    
      static GetAllProducts(offset: u32, limit: u32): Product[] {
        return products.values(offset, offset + limit);
      }
    
      static UpdateProductById(id: u32, partial: PartialProduct): Product {
        const product = this.FindProductById(id);
    
        product.productCode = partial.productCode;
        product.productType = partial.productType;
        product.productLine = partial.productLine;
        product.density = partial.density;
        product.width = partial.width;
        product.lenght = partial.lenght;
        product.thickness = partial.thickness;
        product.amountofUnits = partial.amountofUnits;
        product.produceUnit = partial.produceUnit;
        product.produtionDate = partial.produtionDate;
        
    
        products.set(id, product);
    
        return product;
      }
    
      static DeleteProductById(id: u32): void {
          products.delete(id);
      }
}
  export const products = new PersistentUnorderedMap<u32, Product>("p");
    
  @nearBindgen
  export class PartialProduct {
    productCode: string;
    productType: string;
    productLine: string;
    density:u64; 
    width: u64; 
    lenght: u64; 
    thickness: u64;
    amountofUnits:u64; 
    produceUnit:u64; 
    produtionDate:string;

    
  }
   
   
  
 