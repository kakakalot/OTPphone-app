import React, {useEffect} from 'react';
import {Root} from 'native-base';
import SplashScreen from 'react-native-splash-screen';
import RootNavigator from '@root/navigators/RootNavigator';

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Root>
      <RootNavigator />
    </Root>
  );
};
