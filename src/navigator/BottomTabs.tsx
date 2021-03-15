/*
 * @Description:
 * @Author: JveGuo
 * @Date: 2021-03-15 09:11:57
 * @LastEditTime: 2021-03-15 13:37:49
 * @LastEditors: JveGuo
 */
import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  getFocusedRouteNameFromRoute,
  RouteProp,
  TabNavigationState,
} from '@react-navigation/native';

// import Home from '@/pages/Home/Home';
import Details from '@/pages/Details/Details';
import Account from '@/pages/Account/Account';
import { RootStackNavigation, RootStackParamsList } from './index';
import IconFont from '@/assets/iconfont/index';
import TopTabs from './TopTabs';

type BottomTabsList = {
  TopTabs: undefined;
  Details: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<BottomTabsList>();

type Route = RouteProp<RootStackParamsList, 'BottomTabs'> & {
  state?: TabNavigationState<BottomTabsList>;
};

interface IProps {
  navigation: RootStackNavigation;
  route: Route;
}

const getHeaderTitle = (
  route: RouteProp<RootStackParamsList, 'BottomTabs'>,
) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  switch (routeName) {
    case 'Home':
      return '首页';
    case 'Details':
      return '详情';
    case 'Account':
      return '我的';
  }
};

const BottomTabs = ({ navigation, route }: IProps) => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);

  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: '#f86442' }}>
      <Tab.Screen
        name="TopTabs"
        component={TopTabs}
        options={{
          tabBarLabel: '首页',
          tabBarIcon: ({ color, size }) => (
            <IconFont name="home-filling" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        options={{
          tabBarLabel: '详情',
          tabBarIcon: ({ color, size }) => (
            <IconFont name="smile-filling" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({ color, size }) => (
            <IconFont name="user-filling" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
