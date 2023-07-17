export function formatCurrency(value: number, currency?: string) {
  return `${currency ? currency : ''} ${value.toFixed(2).replace('.', ',')}`;
}