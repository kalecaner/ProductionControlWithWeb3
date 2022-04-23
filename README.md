# Web3 Based Production Control Application

## Summary
The products produced in this project are listed according to the product code and can be separated according to their shifts. All productions are followed by all shifts. This is the first phase of my project. I will continue to develop and add more features to make this project more efficient in the future.

## Requirements
```
- npm Node.js package manager
- git bash (terminal)
- yarn(npm install -g yarn)
- near-cli
```
## Installation
1- Clone repository to your computer
```
https://github.com/kalecaner/ProductionControlWithWeb3.git
```
2- Go to file
```
cd ProductionControlWithWeb3
```
3- Run this in your terminal
```
yarn
```
4- Login your account
```
near login
```
5- Build contract
```
yarn build:release
```
6- deploy contract
```
near dev-deploy ./build/release/simple.wasm
```
7- Export the development account to the $CONTRACT

export CONTRACT=<YOUR_DEV_ACCOUNT_HERE>
## Usage
* Create a new Product or ProductCode
```
near call $CONTRACT createProduct '{"productCode":"<Product Code>","productType":"<Product Type>","productLine":"<Line Name>","density":"<Density Value>","width":"<Width Value>","lenght":"<Lenght Value>","thickness":"<Thickness Value>","amountofUnits":"<Amount of Units>","produtionDate":"<dd.mm.yyyy>"}' --accountId YOUR-ACCOUNT.testnet
```
* Read all product by between a certain index
```
near view $CONTRACT getProducts '{"offset":"<WHERE TO START>","limit":"<LIMIT OF GET PRODUCT"}' --accountId canerkale.testnet
```
* Read all Product by index
```
near view $CONTRACT getProductById '{"id":"<Product-ID>"}' --accountId YOUR-ACCOUNT.testnet
```
* Update Product Data
```
near call $CONTRACT updateProduct '{"id":"<Product-ID>","updates":{"productCode":"<Product Code>","productType":"<Product Type>","productLine":"<Line Name>","density":"<Density Value>","width":"<Width Value>","lenght":"<Lenght Value>","thickness":"<Thickness Value>","amountofUnits":"<Amount of Units>","produtionDate":"<dd.mm.yyyy>"}}' --accountId YOUR-ACCOUNT.testnet
```
* Delete Product by ID
```
near call $CONTRACT DelProduct '{"id":"<Product-ID>"}' --accountId YOUR-ACCOUNT.testnet
```
## Patika
https://www.patika.dev/tr

## Loom video


