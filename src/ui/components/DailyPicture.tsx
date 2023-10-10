import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { fetchDailyPicture } from '../../api/fetchDailyPicture';
import { PictureDto, Optional } from '../../models/picture.dto';
import { COLORS, SIZES } from '../../core/theme';
import { ActivityIndicator } from 'react-native-paper';
import IconButton from './IconButton';
import { sharePicture } from '../../helpers/share';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamsList } from '../navigation/types/HomeStackParamsList';

const DailyPicture = () => {
  const [data, setData] = useState<Optional<PictureDto>>();

  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamsList>>();

  useEffect(() => {
    fetchDailyPicture()
      .then((data) => setData(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <View style={styles.container}>
      {data?.url ? (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('DetailsScreen', { date: data.date })
          }
        >
          <View style={styles.picOfTheDayCard}>
            <View style={styles.picOfTheDayTextsWrapper}>
              <Text style={styles.mainTitle}>Picture Of the Day</Text>

              <Text style={styles.picOfTheDayDate}>{data?.date}</Text>
              <View style={styles.iconWrapper}>
                <IconButton
                  iconOptions={{
                    name: 'share-social',
                    size: SIZES.large,
                    color: COLORS.tertiary,
                  }}
                  onPress={() => sharePicture(data)}
                />
              </View>
            </View>
            <Image
              source={{ uri: data?.url }}
              style={styles.picOfTheDayImage}
            />
            <View style={{ paddingTop: SIZES.small }}>
              <Text style={styles.picOfTheDayTitle}>{data?.title}</Text>
              {data.copyright && (
                <Text style={styles.picOfTheDayCopyright}>
                  Copyright: {data?.copyright}
                </Text>
              )}
            </View>
          </View>
        </TouchableOpacity>
      ) : (
        <ActivityIndicator size={'large'} color={COLORS.secondary} />
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
