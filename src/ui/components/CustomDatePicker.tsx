import { View, StyleSheet, Alert } from 'react-native';
import React from 'react';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { getDailyPicture } from '../../api/picture/getDailyPicture';
import { formatDateHyphenUK } from '../../utils/date/date.utils';
import { PictureEntity } from '../../models/picture/picture.entity';

/** !TODO
 * Reorganize logic
 */

export type DatePickerModeType = 'date' | 'time' | 'datetime' | undefined;

interface Props {
  date: Date;
  mode: DatePickerModeType;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setNewPicture: React.Dispatch<
    React.SetStateAction<PictureEntity | undefined>
  >;
  setMode: React.Dispatch<React.SetStateAction<DatePickerModeType>>;
}

const CustomDatePicker = ({
  date,
  mode,
  setIsOpen,
  setNewPicture,
  setMode,
  setDate,
}: Props) => {
  const onChangeDate = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (selectedDate) {
      setDate(selectedDate);
      setIsOpen(false);
      getDailyPicture(formatDateHyphenUK(selectedDate))
        .then((data) => setNewPicture(data))
        .catch((error) =>
          Alert.alert(
            `An error has occured while trying to fetch pictures: ${error.message}`
          )
        );
    }
    setMode('date');
  };

  return (
    <View style={styles.container}>
      <DateTimePicker
        testID="startDatePicker"
        minimumDate={new Date(1995, 6, 16)}
        maximumDate={new Date()}
        mode={mode}
        value={date}
        display="default"
        onChange={onChangeDate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustomDatePicker;
