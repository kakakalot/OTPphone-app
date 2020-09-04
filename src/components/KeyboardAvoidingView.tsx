import React, {PropsWithChildren} from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useHeaderHeight} from '@react-navigation/stack';

const KeyboardAvoidingView = ({children}: PropsWithChildren<{}>) => {
  const headerHeight = useHeaderHeight();
  const Container = Platform.select<any>({
    ios: RNKeyboardAvoidingView,
    android: View,
  });
  return (
    <Container
      behavior="padding"
      keyboardVerticalOffset={headerHeight + 24}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>{children}</View>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default KeyboardAvoidingView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 48,
    justifyContent: 'space-between',
  },
});
