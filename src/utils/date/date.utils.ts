import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

// format date ex : 2014-02-14
export const formatDateHyphenUK = (date: Date) => {
  return format(date, 'yyyy-MM-dd', { locale: uk });
};
