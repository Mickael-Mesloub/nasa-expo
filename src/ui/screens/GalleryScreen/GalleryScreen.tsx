import { View, StyleSheet, FlatList } from 'react-native';
import React, { useState } from 'react';
import { useGetPicturesFromDateToDate } from '../../../api/picture/getPicturesFromDateToDate';
import { COLORS } from '../../../core/theme';
import { formatDateHyphenUK } from '../../../utils/date/date.utils';
import { useAppStackNavigation } from '../../navigation/hooks/useNavigationHooks';
import { PictureEntity } from '../../../models/picture/picture.entity';
import Loader from '../../components/Loader';
import { DAY, today } from '../../../core/dates';
import { loadMorePictures } from '../../../utils/pictures/pictures.utils';
import GalleryPictureCard from './components/GalleryPictureCard';
import { SafeAreaView } from 'react-native-safe-area-context';

const GalleryScreen = () => {
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
    <SafeAreaView style={styles.container}>
      <View style={styles.gallery}>
        {pictures && !isLoading && (
          <FlatList
            data={newPictures}
            renderItem={({ item }) => {
              return <GalleryPictureCard navigation={navigation} item={item} />;
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gallery: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GalleryScreen;
