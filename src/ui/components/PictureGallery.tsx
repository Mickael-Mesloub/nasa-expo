import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { useGetPicturesFromDateToDate } from '../../api/picture/getPicturesFromDateToDate';
import { ActivityIndicator } from 'react-native-paper';
import { COLORS, SIZES } from '../../core/theme';
import { Image } from 'expo-image';
import { formatDateHyphenUK } from '../../utils/date/date.utils';

const PictureGallery = () => {
  /** TODO:
   *
   * configure error handling
   * create toast (ErrorBox)
   * handle the case when the media_type is 'video'
   * add a loadMore function fetching 10 more pictures (chech useInfiniteQuery() from React Query)
   *
   */

  const today = new Date();
  const DAY = 86_400_000;

  const {
    data: pictures,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetPicturesFromDateToDate({
    start_date: formatDateHyphenUK(new Date(today.getTime() - 5 * DAY)),
    end_date: formatDateHyphenUK(today),
  });

  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator size={'large'} color={COLORS.secondary} />
      )}

      {pictures && !isLoading && (
        <FlatList
          data={pictures}
          renderItem={({ item }) => {
            return (
              <View style={styles.galleryPictureCard}>
                <TouchableOpacity>
                  <Image
                    style={styles.galleryPicture}
                    source={{
                      uri: item?.url,
                    }}
                    contentFit="cover"
                  />
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item) => `${item.date}`}
          numColumns={2}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  galleryPictureCard: {
    padding: SIZES.xSmall,
    width: '50%',
  },

  galleryPicture: {
    width: '100%',
    height: 250,
    borderRadius: SIZES.xSmall,
  },
});

export default PictureGallery;
