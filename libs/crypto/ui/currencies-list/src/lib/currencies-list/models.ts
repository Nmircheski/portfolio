import { IconType } from '@portfolio/ui/icon';

export interface CurrencyTableItem {
  pair: { label: string; icon: IconType };
  currentPrice: number;
  dayToDayPrice: { change: number; amount: number };
  transactionAmount: number;
}
