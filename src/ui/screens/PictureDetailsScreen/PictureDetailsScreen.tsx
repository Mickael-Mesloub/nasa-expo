import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import { usePictureDetailsSreenRoute } from '../../navigation/hooks/useRouteHooks';
import { Image } from 'expo-image';
import { COLORS, SIZES } from '../../../core/theme';
import { useAppStackNavigation } from '../../navigation/hooks/useNavigationHooks';
import YoutubePlayer from 'react-native-youtube-iframe';
import { youtubeLinkParser } from '../../../utils/youtubeLinks/youtubeLinks.utils';
import { SafeAreaView } from 'react-native-safe-area-context';
import PictureDetailsScreenHeader from './components/PictureDetailsScreenHeader';
import PictureLegend from './components/PictureLegend';

const screenHeight = Dimensions.get('window').height;

const PictureDetailsScreen = () => {
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
    <SafeAreaView style={styles.container}>
      <View style={styles.pictureDetails}>
        {picture && (
          <View style={styles.pictureDetailsGlobalWrapper}>
            <PictureDetailsScreenHeader
              picture={picture}
              navigation={navigation}
            />
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
              <PictureLegend picture={picture} />
            </ScrollView>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tertiary,
    paddingTop: StatusBar.currentHeight,
  },
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

  pictureDetailsImage: {
    width: '100%',
    height: screenHeight * 0.9,
  },

  webView: {
    width: '100%',
    marginTop: SIZES.small,
    borderRadius: SIZES.small,
  },
});

export default PictureDetailsScreen;
