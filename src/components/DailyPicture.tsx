import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { fetchDailyPicture } from '../api/fetchDailyPicture';
import { COLORS, SIZES } from '../themes/theme';

const DailyPicture = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchDailyPicture()
      .then((data) => setData(data))
      .catch((error) => console.log(error.message));
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DailyPicture</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: SIZES.large,
    color: COLORS.red,
  },
});

export default DailyPicture;
