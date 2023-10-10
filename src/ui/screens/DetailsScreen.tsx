import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, StyleSheet } from 'react-native';
import React from 'react';

interface Props {
  route: undefined;
  navigation: () => void;
}

const DetailsScreen = ({ route, navigation }: Props) => {
  const { date } = route.params;

  return (
    <SafeAreaView>
      <Text>date : {JSON.stringify(date)}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default DetailsScreen;
