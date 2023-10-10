import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { fetchPictures } from '../api/fetchPictures';
import { PicturesDto } from '../api/pictureSchema';
import { api_key } from '../api/axios';

const PictureGallery = () => {
  const [data, setData] = useState<PicturesDto>([]);

  useEffect(() => {
    fetchPictures({
      api_key: api_key,
      date: '',
      start_date: '2023-10-07',
      end_date: '',
    })
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <View>
      <Text>PictureGallery</Text>
    </View>
  );
};

export default PictureGallery;
