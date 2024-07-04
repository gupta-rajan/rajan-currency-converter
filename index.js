import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_9q4V4IEIpL1c2caBOVfcr5Qi7zIT73TVhZjHlLsG');

//convert formCurrency to toCurrency units
export async function convertCurrency(fromCurrency, toCurrency, units){
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency,
    });
    const multiplier = res.data[toCurrency];
    return multiplier*units;
}