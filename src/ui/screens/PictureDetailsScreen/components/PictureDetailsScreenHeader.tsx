import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../../../core/theme';
import CustomIconButton from '../../../components/CustomIconButton';
import { sharePicture } from '../../../../helpers/share';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PictureEntity } from '../../../../models/picture/picture.entity';
import { AppStackParamList } from '../../../navigation/types/AppStackParamList';

interface Props {
  picture: PictureEntity;
  navigation: NativeStackNavigationProp<AppStackParamList>;
}

const PictureDetailsScreenHeader = ({ picture, navigation }: Props) => {
  return (
    <View style={styles.pictureDetailsHeader}>
      <CustomIconButton
        iconOptions={{
          name: 'arrow-back-outline',
          size: 36,
          color: COLORS.primary,
        }}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.pictureDetailsPicDate}>{picture?.date}</Text>
      <CustomIconButton
        iconOptions={{
          name: 'share-social',
          size: 36,
          color: COLORS.primary,
        }}
        onPress={() => sharePicture(picture)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pictureDetailsHeader: {
    padding: SIZES.xSmall,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pictureDetailsPicDate: {
    fontSize: SIZES.small,
    color: COLORS.tertiary,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.small,
    padding: SIZES.xSmall,
  },
});

export default PictureDetailsScreenHeader;
