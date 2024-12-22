const fetchRate = require("./fetchdata");

const test = async () => {
    const result = await fetchRate("https://api.exchangerate-api.com/v4/latest", "USD", "TRY"); // USD'den TRY'ye döviz kuru alınıyor
    console.log(`1 Dolar = ${result.turkishLirasAmount} Türk Lirası`); //turkishLirasAmount'a doğrudan erişim
}

test(); // Test fonksiyonu çalıştırılıyor
