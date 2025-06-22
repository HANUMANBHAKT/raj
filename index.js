import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi(
  "fca_live_vGFJczfiZqdpaM1Y1FVRXeP9dbmxhXAA4jY4UZI6"
);

export async function convertCurrency(fromCurrency, toCurrency, units) {
  try {
    const res = await freecurrencyapi.latest({
      base_currency: fromCurrency,
      currencies: toCurrency,
    });

    console.log("API Response:", res); // For debugging

    const multiplier = res.data[toCurrency];
    const convertedAmount = multiplier * units;

    console.log(
      `${units} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`
    );
  } catch (err) {
    console.error("Conversion error:", err.message);
  }
}

convertCurrency("INR", "USD", 10);
