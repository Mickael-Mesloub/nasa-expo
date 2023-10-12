import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { AppStackParamList } from '../types/AppStackParamList';

export function useAppStackNavigation() {
  return useNavigation<NativeStackNavigationProp<AppStackParamList>>();
}
