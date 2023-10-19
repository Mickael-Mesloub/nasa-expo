import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../../../core/theme';
import { PictureEntity } from '../../../../models/picture/picture.entity';

interface Props {
  picture: PictureEntity;
}

const PictureLegend = ({ picture }: Props) => {
  return (
    <View style={styles.pictureDetailsPicLegendWrapper}>
      <Text style={styles.pictureDetailsPicTitle}>{picture?.title}</Text>
      <Text style={styles.pictureDetailsPicExplanation}>
        {picture?.explanation}
      </Text>
      {picture.copyright && (
        <Text style={styles.pictureDetailsPicCopyright}>
          Copyright: {picture?.copyright}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  pictureDetailsPicLegendWrapper: {
    padding: SIZES.large,
  },

  pictureDetailsPicTitle: {
    textAlign: 'center',
    fontSize: SIZES.large,
    color: COLORS.secondary,
    paddingBottom: SIZES.large,
  },

  pictureDetailsPicExplanation: {
    color: COLORS.primary,
    fontSize: SIZES.medium,
    textAlign: 'center',
  },

  pictureDetailsPicCopyright: {
    color: COLORS.secondary,
    fontSize: SIZES.medium,
    padding: SIZES.medium,
    textAlign: 'center',
  },
});

export default PictureLegend;
