import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import React from 'react';
import { SIZES } from '../../../../core/theme';
import YoutubeImg from '../../../../assets/img/youtube.jpeg';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../../navigation/types/AppStackParamList';
import { PictureEntity } from '../../../../models/picture/picture.entity';

interface Props {
  navigation: NativeStackNavigationProp<AppStackParamList>;
  item: PictureEntity;
}

const GalleryPictureCard = ({ navigation, item }: Props) => {
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
};

const styles = StyleSheet.create({
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

export default GalleryPictureCard;
