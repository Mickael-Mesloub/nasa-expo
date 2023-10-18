import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PictureEntity } from '../../models/picture/picture.entity';
import { AppStackParamList } from '../../ui/navigation/types/AppStackParamList';

interface Props {
  picture: PictureEntity;
  navigation: NativeStackNavigationProp<AppStackParamList>;
}

export const onPressNavigate = ({ picture, navigation }: Props) => {
  if (picture) {
    navigation.navigate('PictureDetailsStack', {
      screen: 'PictureDetailsScreen',
      params: {
        picture: picture,
      },
    });
  }
};
