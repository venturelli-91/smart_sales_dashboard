// Cache formatter instance to avoid repeated instantiation
const currencyFormatterInstance = new Intl.NumberFormat("pt-BR", {
	style: "currency",
	currency: "BRL",
	minimumFractionDigits: 2,
});

export const formatCurrency = (value: number): string => {
	return currencyFormatterInstance.format(value);
};

export const currencyFormatter = (value: number): string =>
	formatCurrency(value);
