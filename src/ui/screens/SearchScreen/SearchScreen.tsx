import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES } from '../../../core/theme';
import CustomDatePicker, {
  DatePickerModeType,
} from '../../components/CustomDatePicker';
import { useGetDailyPicture } from '../../../api/picture/getDailyPicture';
import { useAppStackNavigation } from '../../navigation/hooks/useNavigationHooks';
import PictureCard from '../../components/PictureCard';
import { onPressNavigate } from '../../../utils/navigation/navigation.utils';

const SearchScreen = () => {
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<DatePickerModeType>(undefined);

  const { data: dailyPicture } = useGetDailyPicture();
  const [newPicture, setNewPicture] = useState(dailyPicture);

  const navigation = useAppStackNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.openPicker}
        onPress={() => setIsOpen(true)}
      >
        <Text style={styles.openPickerText}>{date?.toDateString()} </Text>
      </TouchableOpacity>
      {isOpen ? (
        <CustomDatePicker
          date={date}
          mode={mode}
          setIsOpen={setIsOpen}
          setNewPicture={setNewPicture}
          setMode={setMode}
          setDate={setDate}
        />
      ) : null}
      {newPicture && (
        <PictureCard
          onPressNavigate={() =>
            onPressNavigate({ picture: newPicture, navigation: navigation })
          }
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
    justifyContent: 'center',
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
