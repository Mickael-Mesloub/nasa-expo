import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, { useState } from 'react';
import { useGetPicturesFromDateToDate } from '../../../../api/picture/getPicturesFromDateToDate';
import { COLORS, SIZES } from '../../../../core/theme';
import { Image } from 'expo-image';
import { formatDateHyphenUK } from '../../../../utils/date/date.utils';
import { useAppStackNavigation } from '../../../navigation/hooks/useNavigationHooks';
import { PictureEntity } from '../../../../models/picture/picture.entity';
import Loader from '../../../components/Loader';
import YoutubeImg from '../../../../assets/img/youtube.jpeg';
import { DAY, today } from '../../../../core/dates';
import { loadMorePictures } from '../../../../utils/pictures/pictures.utils';

const PictureGallery = () => {
  /** TODO:
   * handle the case when the media_type is 'video'
   * move all the logic in utils for unit testing
   */

  const startDate = new Date(today.getTime() - 5 * DAY);
  const endDate = today;
  const [newStartDate, setNewStartDate] = useState(startDate);
  const [newEndDate, setNewEndDate] = useState(endDate);

  const navigation = useAppStackNavigation();

  const { data: pictures, isLoading } = useGetPicturesFromDateToDate({
    start_date: formatDateHyphenUK(startDate),
    end_date: formatDateHyphenUK(endDate),
  });

  const [newPictures, setNewPictures] = useState<PictureEntity[]>(
    pictures || []
  );

  return (
    <View style={styles.container}>
      {/* {isLoading && <Loader />} */}

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
                    source={
                      item?.media_type === 'image'
                        ? {
                            uri: item?.url,
                          }
                        : YoutubeImg
                    }
                    contentFit="cover"
                  />
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item) => `${item?.date}`}
          numColumns={2}
          onEndReached={() =>
            loadMorePictures({
              newStartDate: newStartDate,
              setNewStartDate: setNewStartDate,
              newEndDate: newEndDate,
              setNewEndDate: setNewEndDate,
              newPictures: newPictures,
              setNewPictures: setNewPictures,
            })
          }
          onEndReachedThreshold={0.2}
          ListFooterComponent={<Loader />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tertiary,
  },
  galleryPictureCard: {
    padding: SIZES.xSmall,
    width: '50%',
    justifyContent: 'center',
  },

  galleryPicture: {
    width: '100%',
    height: 250,
    borderRadius: SIZES.xSmall,
  },
  webView: {
    width: '100%',
    marginTop: SIZES.small,
    borderRadius: SIZES.small,
  },
});

export default PictureGallery;
