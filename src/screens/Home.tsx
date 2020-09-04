import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {primaryColor} from '@root/colors';
import {Routes} from '@root/navigators/Routes';

const Home = () => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        onPress={() => navigate(Routes.inputPhone.name)}>
        <Text>Click here to START</Text>
      </Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {alignSelf: 'center', backgroundColor: primaryColor, borderRadius: 8},
});
