import { Alert } from 'react-native';
import { getPicturesFromDateToDate } from '../../api/picture/getPicturesFromDateToDate';
import { DAY } from '../../core/dates';
import { PictureEntity } from '../../models/picture/picture.entity';
import { formatDateHyphenUK } from '../date/date.utils';

/** !TODO
 * Reorganize logic
 */

interface Props {
  newStartDate: Date;
  setNewStartDate: React.Dispatch<React.SetStateAction<Date>>;
  newEndDate: Date;
  setNewEndDate: React.Dispatch<React.SetStateAction<Date>>;
  newPictures: PictureEntity[];
  setNewPictures: React.Dispatch<React.SetStateAction<PictureEntity[]>>;
}

export const loadMorePictures = ({
  newStartDate,
  setNewStartDate,
  newEndDate,
  setNewEndDate,
  newPictures,
  setNewPictures,
}: Props) => {
  const updatedStartDate = new Date(newStartDate.getTime() - 9 * DAY);
  setNewStartDate(updatedStartDate);
  getPicturesFromDateToDate(
    formatDateHyphenUK(updatedStartDate),
    formatDateHyphenUK(newEndDate)
  )
    .then((newData) => {
      setNewPictures([...newPictures, ...newData]);
      setNewEndDate(new Date(updatedStartDate.getTime() - 1 * DAY));
    })
    .catch((error) =>
      Alert.alert(
        `An error has occured while trying to fetch pictures: ${error.message}`
      )
    );
};
