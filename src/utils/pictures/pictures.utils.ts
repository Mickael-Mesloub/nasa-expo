import { Alert } from 'react-native';
import { getPicturesFromDateToDate } from '../../api/picture/getPicturesFromDateToDate';
import { PictureEntity } from '../../models/picture/picture.entity';
import { formatDateHyphenUK, updateDates } from '../date/date.utils';

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
  const updatedStartDate = updateDates(newStartDate, 9);
  setNewStartDate(updatedStartDate);
  getPicturesFromDateToDate(
    formatDateHyphenUK(updatedStartDate),
    formatDateHyphenUK(newEndDate)
  )
    .then((newData) => {
      setNewPictures([...newPictures, ...newData]);
      setNewEndDate(updateDates(updatedStartDate, 1));
    })
    .catch((error) =>
      Alert.alert(
        `An error has occured while trying to fetch pictures: ${error.message}`
      )
    );
};
