import MainNavigator from './MainNavigator';
import LoadingScreen from '@root/screens/Loading';
import Home from '@root/screens/Home';
import InputPhone from '@root/screens/InputPhone';
import InputOTP from '@root/screens/InputOTP';

export const Routes = {
  Main: {
    name: 'Main',
    component: MainNavigator,
  },
  loading: {
    name: 'Loading',
    component: LoadingScreen,
  },
  home: {
    name: 'Home',
    component: Home,
  },
  inputPhone: {
    name: 'Authentication',
    component: InputPhone,
  },
  inputOTP: {
    name: 'Input OTP',
    component: InputOTP,
  },
};
