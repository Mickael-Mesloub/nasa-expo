import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { fetchDailyPicture } from '../api/fetchDailyPicture';

const DailyPicture = () => {
  useEffect(() => {
    fetchDailyPicture().then((data) =>
      console.log('data=' + JSON.stringify(data))
    );
  }, []);

  return (
    <View>
      <Text>DailyPicture</Text>
    </View>
  );
};

export default DailyPicture;
