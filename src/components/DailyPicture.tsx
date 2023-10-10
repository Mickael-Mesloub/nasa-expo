import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { fetchDailyPicture } from '../api/fetchDailyPicture';
import { PictureDto } from '../api/pictureSchema';
import { COLORS, SIZES } from '../themes/theme';
import { ActivityIndicator } from 'react-native-paper';
import IconButton from './iconButton/IconButton';
import { sharePicture } from '../helpers/share';

const DailyPicture = () => {
  const [data, setData] = useState<PictureDto>({
    date: '',
    explanation: '',
    hdurl: '',
    url: '',
    title: '',
    copyright: '',
    thumbs: '',
  });

  useEffect(() => {
    fetchDailyPicture()
      .then((data) => setData(data))
      .catch((error) => console.log(error.message));
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <View style={styles.container}>
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

        {data.url ? (
          <>
            <Image
              source={{ uri: data?.url }}
              resizeMode="cover"
              style={styles.picOfTheDayImage}
            />
          </>
        ) : (
          <ActivityIndicator size={'large'} color={COLORS.secondary} />
        )}
        <View style={{ paddingTop: SIZES.small }}>
          <Text style={styles.picOfTheDayTitle}>{data?.title}</Text>
          {data.copyright && (
            <Text style={styles.picOfTheDayCopyright}>
              Copyright: {data?.copyright}
            </Text>
          )}
        </View>
      </View>
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
