import { View, StyleSheet } from 'react-native';
import React from 'react';
import { useGetDailyPicture } from '../../../api/picture/getDailyPicture';
import { useAppStackNavigation } from '../../navigation/hooks/useNavigationHooks';
import PictureCard from '../../components/DailyPictureCard';
import Loader from '../../components/Loader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../../core/theme';

const HomeScreen = () => {
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
    <SafeAreaView style={styles.container}>
      <View style={styles.dailyPicture}>
        {isLoading && <Loader />}

        {dailyPicture && !isLoading && (
          <PictureCard
            onPressNavigate={onPressNavigate}
            dailyPicture={dailyPicture}
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
  },
  dailyPicture: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default HomeScreen;
