import { convertCurrency } from "raj_currency-converter";

convertCurrency("USD", "EUR", 100).then((result) => {
  console.log(result);
});
