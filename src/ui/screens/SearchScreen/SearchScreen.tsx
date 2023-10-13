import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES } from '../../../core/theme';
import CustomDatePicker, {
  DatePickerModeType,
} from '../../components/CustomDatePicker';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import {
  getDailyPicture,
  useGetDailyPicture,
} from '../../../api/picture/getDailyPicture';
import { useAppStackNavigation } from '../../navigation/hooks/useNavigationHooks';
import PictureCard from '../../components/PictureCard';
import { formatDateHyphenUK } from '../../../utils/date/date.utils';

const SearchScreen = () => {
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<DatePickerModeType>(undefined);

  const { data: dailyPicture, isLoading } = useGetDailyPicture();
  const [newPicture, setNewPicture] = useState(dailyPicture);

  const navigation = useAppStackNavigation();

  const onPressNavigate = () => {
    if (newPicture) {
      navigation.navigate('PictureDetailsStack', {
        screen: 'PictureDetailsScreen',
        params: {
          picture: newPicture,
        },
      });
    }
  };

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (selectedDate) {
      setDate(selectedDate);
      setIsOpen(false);
      getDailyPicture(formatDateHyphenUK(date)).then((data) =>
        setNewPicture(data)
      );
    }
    setMode('date');
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.openPicker}
        onPress={() => setIsOpen(true)}
      >
        <Text style={styles.openPickerText}>{date?.toDateString()} </Text>
      </TouchableOpacity>
      {isOpen ? (
        <CustomDatePicker date={date} onChange={onChange} mode={mode} />
      ) : null}
      {newPicture && (
        <PictureCard
          onPressNavigate={onPressNavigate}
          dailyPicture={newPicture}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tertiary,
  },
  openPicker: {
    marginVertical: SIZES.xxLarge,
    padding: SIZES.xxSmall,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    width: 150,
    borderRadius: SIZES.xxSmall,
  },

  openPickerText: {
    color: COLORS.tertiary,
    fontWeight: '700',
  },
});

export default SearchScreen;
