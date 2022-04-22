# ProductionControlWithWeb3
# Summary
The products produced in this project are listed according to the product code and can be separated according to their shifts. All productions are followed by all shifts. This is the first phase of my project. I will continue to develop and add more features to make this project more efficient in the future.

# Requirements
```
- npm Node.js package manager
- git bash (terminal)
- yarn(npm install -g yarn)
- near-cli
```
# How to use

Projeyi şuradan klonlayabilirsiniz:
```
https://github.com/kalecaner/ProductionControlWithWeb3.git
```
Projemin temeli olarak starter near projeyi kullandım. Burada bulabilirsiniz:
```
https://github.com/Learn-NEAR/starter--near-sdk-as
```
İlk olarak, ipliği çalıştırmanız gerekir.
```
yarn
```
Ardından, near-cli'yi yüklemeniz gerekir. Ardından hesabınıza giriş yapmalısınız. (ana ağ veya test ağı)
```
near login
```
Artık thread build:relesae'yi çalıştırabilirsiniz.
```
yarn build:release
```
Bu adımda yakın konuşlandırma komutunu çalıştırmalısınız. Projemi "singleton" klasörüne yazıyorum, böylece dağıtmalısınız.
```
near deploy ./build/release/singleton.wasm
```
Hazırlığımızı bitirdik. Şimdi index.ts üzerindeki fonksiyonlara bir göz atabiliriz.
