import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, TextInput, Platform} from 'react-native';
import {Button, Text} from 'native-base';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {primaryColor, borderColor} from '@root/colors';
import {Routes} from '@root/navigators/Routes';
import {KeyboardAvoidingView} from '@root/components';

type ParamList = {
  InputPhone: {
    clearPhoneNumber: number;
  };
};

const InputPhone = () => {
  const {navigate} = useNavigation();
  const params = useRoute<RouteProp<ParamList, 'InputPhone'>>().params;
  const [phone, setPhone] = useState('');
  const [isFocus, setFocus] = useState(false);
  const inputRef = useRef<TextInput>(null);
  const onChangeText = (text: string) => {
    setPhone(text.replace(/[^0-9]/g, ''));
  };

  useEffect(() => {
    if (params?.clearPhoneNumber) {
      setPhone('');
      inputRef.current?.focus();
    }
  }, [params?.clearPhoneNumber]);

  return (
    <KeyboardAvoidingView>
      <View>
        <Text>{'Please input your mobile phone number'}</Text>
        <View
          style={[
            styles.inputPhoneContainer,
            isFocus && styles.inputPhoneContainerFocused,
          ]}>
          <Text style={{fontSize: 15}}>{'+84'}</Text>
          <View style={styles.inputDivider} />
          <TextInput
            style={styles.input}
            ref={inputRef}
            value={phone}
            autoFocus
            selectionColor={primaryColor}
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
            onChangeText={onChangeText}
            underlineColorAndroid="transparent"
            keyboardType="phone-pad"
          />
        </View>
      </View>
      <Button
        full
        disabled={!phone}
        style={[styles.button, !phone && styles.buttonDisabled]}
        onPress={() => navigate(Routes.inputOTP.name)}>
        <Text>{'Continue'}</Text>
      </Button>
    </KeyboardAvoidingView>
  );
};

export default InputPhone;

const styles = StyleSheet.create({
  inputPhoneContainerFocused: {
    borderBottomColor: primaryColor,
  },
  input: {flex: 1, fontSize: 15},
  inputDivider: {
    borderWidth: 1,
    height: 20,
    borderColor: borderColor,
    marginHorizontal: 8,
  },
  inputPhoneContainer: {
    flexDirection: 'row',
    borderBottomColor: borderColor,
    borderBottomWidth: 2,
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 40,
    paddingBottom: Platform.select({ios: 4, android: 0}),
  },
  button: {
    backgroundColor: primaryColor,
    borderRadius: 8,
    marginBottom: Platform.select({ios: 0, android: 24}),
  },
  buttonDisabled: {backgroundColor: borderColor},
});
