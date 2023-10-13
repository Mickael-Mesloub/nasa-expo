import { View, StyleSheet } from 'react-native';
import React from 'react';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

export type DatePickerModeType = 'date' | 'time' | 'datetime' | undefined;

type Props = {
  date: Date;
  mode: DatePickerModeType;
  onChange: (event: DateTimePickerEvent, selectedDate?: Date) => void;
};

const CustomDatePicker = ({ date, onChange, mode }: Props) => {
  return (
    <View style={styles.container}>
      <DateTimePicker
        testID="startDatePicker"
        minimumDate={new Date(1995, 6, 16)}
        maximumDate={new Date()}
        mode={mode}
        value={date}
        display="default"
        onChange={onChange}
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
