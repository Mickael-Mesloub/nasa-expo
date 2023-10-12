import { TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { IconOptionsType } from '../../types/IconOptionsType';

interface Props {
  iconOptions: IconOptionsType;
  onPress: () => void;
}

const IconButton = ({ iconOptions, onPress }: Props) => {
  return (
    <TouchableOpacity hitSlop={10} onPress={onPress}>
      <Icon
        name={iconOptions.name}
        size={iconOptions.size}
        color={iconOptions.color}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
