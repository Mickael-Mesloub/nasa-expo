import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useCallback, useState } from 'react';
import { COLORS, SIZES } from '../../core/theme';
import { Image } from 'expo-image';
import { sharePicture } from '../../helpers/share';
import IconButton from './CustomIconButton';
import { PictureEntity } from '../../models/picture/picture.entity';
import YoutubePlayer from 'react-native-youtube-iframe';
import { youtubeLinkParser } from '../../utils/youtubeLinks/youtubeLinks.utils';

interface Props {
  onPressNavigate: () => void;
  dailyPicture: PictureEntity;
}

const PictureCard = ({ onPressNavigate, dailyPicture }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const onStateChange = useCallback((state: string) => {
    if (state === 'ended') {
      setIsPlaying(false);
    }
  }, []);

  return (
    <Pressable
      onPress={
        dailyPicture?.media_type === 'image' ? onPressNavigate : () => null
      }
    >
      <View style={styles.picOfTheDayCard}>
        <Pressable
          style={styles.picOfTheDayTextsWrapper}
          onPress={
            dailyPicture?.media_type === 'video' ? onPressNavigate : () => null
          }
        >
          <Text style={styles.mainTitle}>
            {dailyPicture?.media_type === 'image'
              ? 'Picture Of the Day'
              : 'Video of the Day'}
          </Text>
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
        </Pressable>

        {dailyPicture?.media_type === 'video' && (
          <YoutubePlayer
            height={225}
            play={isPlaying}
            videoId={youtubeLinkParser(dailyPicture?.url)}
            onChangeState={onStateChange}
            webViewStyle={styles.webView}
          />
        )}

        {dailyPicture?.media_type === 'image' && (
          <Image
            source={{ uri: dailyPicture?.url }}
            style={styles.picOfTheDayImage}
          />
        )}
        <View style={{ paddingTop: SIZES.small }}>
          <Text style={styles.picOfTheDayTitle}>{dailyPicture?.title}</Text>
          {dailyPicture.copyright && (
            <Text style={styles.picOfTheDayCopyright}>
              Copyright: {dailyPicture?.copyright}
            </Text>
          )}
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  picOfTheDayCard: {
    padding: SIZES.medium,
    marginVertical: SIZES.medium,
    backgroundColor: COLORS.primaryTransp,
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

  webView: {
    width: '100%',
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
