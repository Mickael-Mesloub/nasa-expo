import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES } from '../../../core/theme';
import CustomDatePicker, {
  DatePickerModeType,
} from '../../components/CustomDatePicker';
import { useGetDailyPicture } from '../../../api/picture/getDailyPicture';
import { useAppStackNavigation } from '../../navigation/hooks/useNavigationHooks';
import PictureCard from '../../components/DailyPictureCard';
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
      <View style={styles.findPictureHeader}>
        <Text style={styles.findPictureTitle}>
          Find a picture by its date of release
        </Text>
        <TouchableOpacity
          style={styles.openPickerButton}
          onPress={() => setIsOpen(true)}
        >
          <Text style={styles.openPickerText}>{date?.toDateString()} </Text>
        </TouchableOpacity>
      </View>

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
    justifyContent: 'space-around',
  },
  openPickerButton: {
    marginVertical: SIZES.xxLarge,
    padding: SIZES.xxSmall,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    width: 150,
    borderRadius: SIZES.xxSmall,
  },

  findPictureHeader: {
    flex: 1,
    justifyContent: 'center',
  },

  findPictureTitle: {
    fontWeight: '700',
    textAlign: 'center',
  },

  openPickerText: {
    color: COLORS.tertiary,
    fontWeight: '700',
  },
});

export default SearchScreen;
