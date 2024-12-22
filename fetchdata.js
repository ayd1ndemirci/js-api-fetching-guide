const url = "https://api.exchangerate-api.com/v4/latest"; // API'nin URL'si

const fetchRate = async (url, baseCurrency, targetCurrency) => { // Asenkron fonksiyon tanımlanıyor
    try { // Hata yakalamak için try bloğu
        const response = await fetch(`${url}/${baseCurrency}`); // API'den veri çekiliyor
        const data = await response.json(); // JSON formatında cevap alınıyor
        const currencyRate = data.rates[targetCurrency]; // Hedef para biriminin kuru alınıyor
        const turkishLirasAmount = currencyRate.toFixed(2); // Kuru iki ondalıklı basamağa yuvarlıyoruz
        return { // Sonuçları döndürüyoruz
            data,
            currencyRate,
            turkishLirasAmount
        };
    } catch (err) { // Eğer hata oluşursa
        console.log("Hata: ", err); // Hata konsola yazdırılıyor
    }
};

module.exports = fetchRate;
