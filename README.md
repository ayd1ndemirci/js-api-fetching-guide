# API ile Döviz Kuru Çekme

Bu repo, bir API kullanarak döviz kuru verilerini çekmeyi ve temel para biriminden hedef para birimine dönüştürmeyi amaçlayan basit bir JavaScript örneği sunmaktadır. Bu örnekte, **ExchangeRate API**'yi kullanarak USD'yi TRY'ye dönüştürüyoruz.

## İçerik

- `fetchRate` fonksiyonu: Döviz kuru verilerini API'den çeker.
- API'den alınan veriler işlenir ve kullanıcıya sunulur.

## Gereksinimler

- Bu proje sadece bir web tarayıcısında çalıştırılabilir. Herhangi bir sunucu gereksinimi yoktur.
- `fetch` fonksiyonu, modern tarayıcılarda varsayılan olarak desteklenmektedir.

## Kullanım

1. **API URL**: API'nin URL'si `https://api.exchangerate-api.com/v4/latest` olarak ayarlanmıştır. Bu API, döviz kuru verilerini sağlar.
2. **`fetchRate` Fonksiyonu**: Döviz kuru verisini çeker ve temel para biriminden hedef para birimine dönüşüm oranını döndürür.
3. **`test` Fonksiyonu**: Bu fonksiyon, USD'yi TRY'ye dönüştürüp sonucu konsola yazdırır.

```javascript
const url = "https://api.exchangerate-api.com/v4/latest";
```
Bu satırda, döviz kuru verisini alacağımız API'nin URL'sini tanımlıyoruz.
```javascript
const fetchRate = async (url, baseCurrency, targetCurrency) => { ... }
```
fetchRate asenkron fonksiyonu, API'ye istek yaparak döviz kuru verisini çeker ve hedef para birimine dönüştürür.
```javascript
const test = async () => { ... }
```
Bu fonksiyon, fetchRate fonksiyonunu çağırarak USD'yi TRY'ye dönüştürür ve sonucu konsola yazdırır.

```javascript
test();
```
test() fonksiyonu çalıştırılarak, döviz kuru bilgisi alınır ve konsola yazdırılır.

