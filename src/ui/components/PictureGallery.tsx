import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { fetchPictures } from '../../api/fetchPictures';
import { api_key } from '../../api/axios';
import { PicturesDto } from '../../models/picture.dto';

const PictureGallery = () => {
  const [data, setData] = useState<PicturesDto>([]);

  /**
   * !IMPORTANT : Move the fetch function to api > hooks
   */

  useEffect(() => {
    fetchPictures({
      api_key: api_key,
      start_date: '2023-10-07',
    })
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <View>
      <Text>PictureGallery</Text>
    </View>
  );
};

export default PictureGallery;
