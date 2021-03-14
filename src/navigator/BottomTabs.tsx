import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  getFocusedRouteNameFromRoute,
  RouteProp,
  TabNavigationState,
} from '@react-navigation/native';

import Home from '@/pages/Home/Home';
import Details from '@/pages/Details/Details';
import Account from '@/pages/Account/Account';
import { RootStackNavigation, RootStackParamsList } from './index';

type BottomTabsList = {
  Home: undefined;
  Details: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<BottomTabsList>();

type Route = RouteProp<RootStackParamsList, 'BottomTabs'> & {
  state?: TabNavigationState<BottomTabsList>;
};

interface Iprops {
  navigation: RootStackNavigation;
  route: Route;
}

const getHeaderTitle = (
  route: RouteProp<RootStackParamsList, 'BottomTabs'>,
) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  switch (routeName) {
    case 'Home':
      return '首页';
    case 'Details':
      return '详情';
    case 'Account':
      return '我的';
  }
};

const BottomTabs = ({ navigation, route }: Iprops) => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);

  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: '#f86442' }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: '首页' }}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        options={{ tabBarLabel: '详情' }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{ tabBarLabel: '我的' }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
