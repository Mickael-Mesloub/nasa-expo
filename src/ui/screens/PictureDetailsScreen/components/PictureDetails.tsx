import { Text, StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import React, { useCallback, useState } from 'react';
import { usePictureDetailsSreenRoute } from '../../../navigation/hooks/useRouteHooks';
import { Image } from 'expo-image';
import { COLORS, SIZES } from '../../../../core/theme';
import IconButton from '../../../components/IconButton';
import { useAppStackNavigation } from '../../../navigation/hooks/useNavigationHooks';
import { sharePicture } from '../../../../helpers/share';
import YoutubePlayer from 'react-native-youtube-iframe';
import { youtubeLinkParser } from '../../../../utils/youtubeLinks/youtubeLinks.utils';

const screenHeight = Dimensions.get('window').height;

const PictureDetails = () => {
  const route = usePictureDetailsSreenRoute();
  const navigation = useAppStackNavigation();
  const { picture } = route.params;

  const [isPlaying, setIsPlaying] = useState(false);

  const onStateChange = useCallback((state: string) => {
    if (state === 'ended') {
      setIsPlaying(false);
    }
  }, []);

  return (
    <View style={styles.pictureDetails}>
      {picture && (
        <View style={styles.pictureDetailsGlobalWrapper}>
          <View style={styles.pictureDetailsHeader}>
            <IconButton
              iconOptions={{
                name: 'arrow-back-outline',
                size: 36,
                color: COLORS.primary,
              }}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.pictureDetailsPicDate}>{picture?.date}</Text>
            <IconButton
              iconOptions={{
                name: 'share-social',
                size: 36,
                color: COLORS.primary,
              }}
              onPress={() => sharePicture(picture)}
            />
          </View>
          <ScrollView>
            {picture?.media_type === 'video' && (
              <YoutubePlayer
                height={250}
                play={isPlaying}
                videoId={youtubeLinkParser(picture?.url)}
                onChangeState={onStateChange}
                webViewStyle={styles.webView}
              />
            )}
            {picture?.media_type === 'image' && (
              <Image
                source={{ uri: picture?.url }}
                style={styles.pictureDetailsImage}
                contentFit="cover"
              />
            )}
            <View style={styles.pictureDetailsPicLegendWrapper}>
              <Text style={styles.pictureDetailsPicTitle}>
                {picture?.title}
              </Text>
              <Text style={styles.pictureDetailsPicExplanation}>
                {picture?.explanation}
              </Text>
              {picture.copyright && (
                <Text style={styles.pictureDetailsPicCopyright}>
                  Copyright: {picture?.copyright}
                </Text>
              )}
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  pictureDetails: {
    flex: 1,
    backgroundColor: COLORS.tertiary,
    height: '100%',
    width: '100%',
  },

  pictureDetailsGlobalWrapper: {
    height: '100%',
    width: '100%',
  },

  pictureDetailsHeader: {
    padding: SIZES.xSmall,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  pictureDetailsImage: {
    width: '100%',
    height: screenHeight * 0.9,
  },

  webView: {
    width: '100%',
    marginTop: SIZES.small,
    borderRadius: SIZES.small,
  },

  pictureDetailsPicDate: {
    fontSize: SIZES.small,
    color: COLORS.tertiary,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.small,
    padding: SIZES.xSmall,
  },

  pictureDetailsPicLegendWrapper: {
    padding: SIZES.large,
  },

  pictureDetailsPicTitle: {
    textAlign: 'center',
    fontSize: SIZES.large,
    color: COLORS.secondary,
    paddingBottom: SIZES.large,
  },

  pictureDetailsPicExplanation: {
    color: COLORS.primary,
    fontSize: SIZES.medium,
    textAlign: 'center',
  },

  pictureDetailsPicCopyright: {
    color: COLORS.secondary,
    fontSize: SIZES.medium,
    padding: SIZES.medium,
    textAlign: 'center',
  },
});

export default PictureDetails;
