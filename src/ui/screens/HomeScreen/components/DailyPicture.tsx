import { View, StyleSheet } from 'react-native';
import React from 'react';
import { useGetDailyPicture } from '../../../../api/picture/getDailyPicture';
import { useAppStackNavigation } from '../../../navigation/hooks/useNavigationHooks';
import PictureCard from '../../../components/PictureCard';
import Loader from '../../../components/Loader';

const DailyPicture = () => {
  const { data: dailyPicture, isLoading } = useGetDailyPicture();

  const navigation = useAppStackNavigation();

  const onPressNavigate = () => {
    if (dailyPicture) {
      navigation.navigate('PictureDetailsStack', {
        screen: 'PictureDetailsScreen',
        params: {
          picture: dailyPicture,
        },
      });
    }
  };

  return (
    <View style={styles.container}>
      {isLoading && <Loader />}

      {dailyPicture && !isLoading && (
        <PictureCard
          onPressNavigate={onPressNavigate}
          dailyPicture={dailyPicture}
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
});

export default DailyPicture;
