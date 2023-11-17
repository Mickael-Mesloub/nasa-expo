import { format } from 'date-fns';
import { uk } from 'date-fns/locale';
import { DAY } from '../../core/dates';

// format date ex : 2014-02-14
export const formatDateHyphenUK = (date: Date) => {
  return format(date, 'yyyy-MM-dd', { locale: uk });
};

export const updateDates = (date: Date, nbOfDays: number) => {
  return new Date(date.getTime() - nbOfDays * DAY);
};
