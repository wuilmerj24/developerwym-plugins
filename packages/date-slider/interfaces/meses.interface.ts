import { Dia } from './dias.interface';

export interface CalendarMonth {
  id: string;
  monthName: string;
  days: Dia[];
  isSelected: boolean;
}
