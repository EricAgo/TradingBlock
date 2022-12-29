
export type StockSymbol = "MSFT" | "AMZN" | "AAPL";
export type StockObject = {
    [key in StockSymbol]: string;
};
