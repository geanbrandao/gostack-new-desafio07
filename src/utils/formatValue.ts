const formatValue = (value: number): string =>
  Intl.NumberFormat('PT-br', { style: 'currency', currency: 'BRL' }).format(
    value,
  ); // TODO

export default formatValue;
