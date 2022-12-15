
//getRandomStock range function
//generates a value that is rounded to the nearest nickel within a range of +- 5
//@param minStockValue is the minimum value allowed for the stock
//@param maxStockValue is the maximum value allowed for the stock
//@return decimal integer with length two precision e.g .00
const getRandomStockRange = (minStockValue, maxStockValue) => {
  //scale factor which attenuates possible values
  let scaleFactor = (Math.random() * 10) + 1
  //number between min and max
  let number = (Math.random() * ((maxStockValue / scaleFactor) - (minStockValue / scaleFactor)) + minStockValue);
  //number is checked to be within a specified range
  number = Math.max(minStockValue, Math.min(maxStockValue, number));
  //nearest nickel rounding factor
  let roundingFactor = 0.05;
  //round value
  number = Math.round(number / roundingFactor) * roundingFactor;
  //truncate precision
  return number.toFixed(2);
};

//generates a random value for a given stock symbol
//@param string mapping to a stock symbol
//@return decimal integer with length two precision e.g .00
const randomStockValueGenerator = (stock) => {
  switch (stock) {
    //microsoft stock case
    case "MSFT":
      return getRandomStockRange(230.0, 260.0);
    //apple stock case
    case "AAPL":
      return getRandomStockRange(130.0, 165.0);
    //amazon stock case
    case "AMZN":
      return getRandomStockRange(90.0, 100.0);
    //error case
    default:
      "Cannot find that stock symbol";
      break;
  }
};

//generates the object array for each stock price simulating an API call for stock prices
//@return Object with keys for stock and their current value
const generateStocksObject = () => {
  return {
    MSFT: randomStockValueGenerator("MSFT"),
    AAPL: randomStockValueGenerator("AAPL"),
    AMZN: randomStockValueGenerator("AMZN"),
  };
};

//get stock data hook used to simualate an API call
//@return Object with keys for stock and their current value
const useGetStockData = () => {
  return [generateStocksObject()];
};

export default useGetStockData;
