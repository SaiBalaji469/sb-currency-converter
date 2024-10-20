import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_vtK5XV2f98WopgDMYvZwIMq5o75a21Fe0TAoy6ju');




export async function convertCurrency(fromCurrency, toCurrency, units){
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier = res.data[toCurrency];
    // console.log( multiplier * units)
    return multiplier * units;

}


convertCurrency("USD", "INR" ,3)