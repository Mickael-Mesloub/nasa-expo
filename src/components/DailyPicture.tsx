import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { fetchDailyPicture } from '../api/fetchDailyPicture';

const DailyPicture = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchDailyPicture().then((data) => setData(data));
  }, []);

  return (
    <View style={styles.container}>
      <Text>DailyPicture</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {},
});

export default DailyPicture;
