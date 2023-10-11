import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../core/theme';
import { ActivityIndicator } from 'react-native-paper';
import IconButton from './IconButton';
import { sharePicture } from '../../helpers/share';
import { useGetDailyPicture } from '../../api/picture/getDailyPicture';
import { usePictureDetailsStackNavigation } from '../navigation/hooks/useNavigationHooks';
import { usePictureDetailsSreenRoute } from '../navigation/hooks/useRouteHooks';

const DailyPicture = () => {
  const navigation = usePictureDetailsStackNavigation();

  /** TODO:
   *
   * configure error handling
   * create toast (ErrorBox)
   * check refetch() function
   * fix the navigate to PictureDetailsScreen (not working atm)
   *
   */

  const {
    data: dailyPicture,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetDailyPicture();

  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator size={'large'} color={COLORS.secondary} />
      )}
      {dailyPicture && !isLoading && (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PictureDetailsScreen', {
              picture: dailyPicture,
            })
          }
        >
          <View style={styles.picOfTheDayCard}>
            <View style={styles.picOfTheDayTextsWrapper}>
              <Text style={styles.mainTitle}>Picture Of the Day</Text>

              <Text style={styles.picOfTheDayDate}>{dailyPicture?.date}</Text>
              <View style={styles.iconWrapper}>
                <IconButton
                  iconOptions={{
                    name: 'share-social',
                    size: SIZES.large,
                    color: COLORS.tertiary,
                  }}
                  onPress={() => sharePicture(dailyPicture)}
                />
              </View>
            </View>
            <Image
              source={{ uri: dailyPicture?.url }}
              style={styles.picOfTheDayImage}
            />
            <View style={{ paddingTop: SIZES.small }}>
              <Text style={styles.picOfTheDayTitle}>{dailyPicture?.title}</Text>
              {dailyPicture.copyright && (
                <Text style={styles.picOfTheDayCopyright}>
                  Copyright: {dailyPicture?.copyright}
                </Text>
              )}
            </View>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  picOfTheDayCard: {
    padding: SIZES.medium,
    marginVertical: SIZES.medium,
    backgroundColor: COLORS.lightGrey,
  },

  picOfTheDayTextsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  mainTitle: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    paddingLeft: SIZES.xSmall,
  },

  picOfTheDayDate: {
    fontSize: SIZES.small,
    color: COLORS.tertiary,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.small,
    padding: SIZES.xSmall,
  },

  picOfTheDayImage: {
    width: '100%',
    height: 300,
    marginTop: SIZES.small,
    borderRadius: SIZES.small,
  },

  picOfTheDayTitle: {
    fontSize: SIZES.medium,
    color: COLORS.primary,
    textAlign: 'center',
  },

  picOfTheDayCopyright: {
    fontSize: SIZES.small,
    color: COLORS.secondary,
    textAlign: 'center',
  },

  iconWrapper: {
    borderRadius: SIZES.xxLarge,
    backgroundColor: COLORS.primary,
    padding: SIZES.xSmall,
  },
});

export default DailyPicture;
