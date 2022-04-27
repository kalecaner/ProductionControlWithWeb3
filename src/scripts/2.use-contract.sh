#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

echo
echo ---------------------------------------------------------
echo "Step 0: Check for environment variable with contract name"
echo ---------------------------------------------------------
echo

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$CONTRACT" ] || echo "Found it! \$CONTRACT is set to [ $CONTRACT ]"

echo
echo ---------------------------------------------------------
echo "Step 1: Initialize the contract"
echo ---------------------------------------------------------
echo

near call $CONTRACT Saveshift '{}' --accountId $CONTRACT

echo
echo ---------------------------------------------------------
echo "Step 2: Create product"
echo ---------------------------------------------------------
echo

near call $CONTRACT createProduct '{"productCode":"<Product Code>","productType":"<Product Type>","productLine":"<Line Name>","density":"<Density Value>","width":"<Width Value>","lenght":"<Lenght Value>","thickness":"<Thickness Value>","amountofUnits":"<Amount of Units>","produtionDate":"<dd.mm.yyyy>"}' --accountId $CONTRACT


echo
echo
exit 0
