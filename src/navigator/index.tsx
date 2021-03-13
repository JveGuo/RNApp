import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
  StackNavigationProp,
} from '@react-navigation/stack';
import Home from '@/pages/Home/Home';
import Details from '@/pages/Details/Details';
import { Platform, StyleSheet } from 'react-native';

export type RootStackParamsList = {
  Home: undefined;
  Details: {
    id: number;
  };
};

export type RootStackNavigation = StackNavigationProp<RootStackParamsList>;

const Stack = createStackNavigator<RootStackParamsList>();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="float"
        screenOptions={{
          headerTitleAlign: 'center',
          // 设置安卓 头部导航 切换时使用ios效果
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
          // 设置安卓 主体导航 切换时使用ios效果
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          // 安卓使用滑动返回
          gestureEnabled: true,
          // 改变安卓返回手势的方向
          gestureDirection: 'horizontal',
          headerStyle: {
            ...Platform.select({
              android: {
                elevation: 0,
                borderBottomWidth: StyleSheet.hairlineWidth,
              },
            }),
          },
        }}>
        <Stack.Screen
          name="Home"
          options={{ title: '首页' }}
          component={Home}
        />
        <Stack.Screen
          name="Details"
          options={{ title: '详情页' }}
          component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
