import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../screen/Login'
import Sign_up from '../screen/Sign_up'
import Main from '../screen/Main'
import Profile from '../screen/Profile'

const AppNavigator = createStackNavigator({
  Login,
  Sign_up,
  Main,
  Profile
});

export default createAppContainer(AppNavigator);