import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import {
  getPicturesFromDateToDate,
  useGetPicturesFromDateToDate,
} from '../../../../api/picture/getPicturesFromDateToDate';
import { ActivityIndicator, Text } from 'react-native-paper';
import { COLORS, SIZES } from '../../../../core/theme';
import { Image } from 'expo-image';
import { formatDateHyphenUK } from '../../../../utils/date/date.utils';
import { useAppStackNavigation } from '../../../navigation/hooks/useNavigationHooks';
import { PictureEntity } from '../../../../models/picture/picture.entity';

const PictureGallery = () => {
  /** TODO:
   *
   * configure error handling
   * create toast (ErrorBox)
   * handle the case when the media_type is 'video'
   * add a loadMore function fetching 10 more pictures (chech useInfiniteQuery() from React Query)
   * move renderLoader in another file
   *
   */
  const today = new Date();
  const DAY = 86_400_000;

  const [startDate] = useState(new Date(today.getTime() - 5 * DAY));
  const [endDate] = useState(today);
  const [newStartDate, setNewStartDate] = useState(startDate);
  const [newEndDate, setNewEndDate] = useState(endDate);

  const navigation = useAppStackNavigation();

  const {
    data: pictures,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetPicturesFromDateToDate({
    start_date: formatDateHyphenUK(startDate),
    end_date: formatDateHyphenUK(endDate),
  });

  const [newPictures, setNewPictures] = useState<PictureEntity[]>(
    pictures ? [...pictures] : []
  );

  const loadMoreItems = () => {
    const updatedStartDate = new Date(newStartDate.getTime() - 5 * DAY);
    setNewStartDate(updatedStartDate);
    getPicturesFromDateToDate(
      formatDateHyphenUK(updatedStartDate),
      formatDateHyphenUK(newEndDate)
    ).then((newData) => {
      setNewPictures([...newPictures, ...newData]);
      setNewEndDate(new Date(updatedStartDate.getTime() - 1 * DAY));
    });
  };

  const renderLoader = () => {
    return (
      <View style={styles.loadMoreLoader}>
        <ActivityIndicator size={'large'} color={COLORS.secondary} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator size={'large'} color={COLORS.secondary} />
      )}

      {pictures && !isLoading && (
        <FlatList
          data={newPictures}
          renderItem={({ item }) => {
            return (
              <View style={styles.galleryPictureCard}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('PictureDetailsStack', {
                      screen: 'PictureDetailsScreen',
                      params: {
                        picture: item,
                      },
                    })
                  }
                >
                  <Text>{item?.date} </Text>
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
          keyExtractor={(item) => `${item?.date}`}
          numColumns={2}
          onEndReached={loadMoreItems}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderLoader}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.tertiary,
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
  loadMoreLoader: {
    marginVertical: SIZES.medium,
    alignItems: 'center',
  },
});

export default PictureGallery;
