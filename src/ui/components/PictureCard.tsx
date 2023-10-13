import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../core/theme';
import { Image } from 'expo-image';
import { sharePicture } from '../../helpers/share';
import IconButton from './IconButton';
import { PictureEntity } from '../../models/picture/picture.entity';

type Props = {
  onPressNavigate: () => void;
  dailyPicture: PictureEntity;
};

const PictureCard = ({ onPressNavigate, dailyPicture }: Props) => {
  return (
    <TouchableOpacity onPress={onPressNavigate}>
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
  );
};

const styles = StyleSheet.create({
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

export default PictureCard;
