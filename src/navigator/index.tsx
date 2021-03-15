/*
 * @Description:
 * @Author: JveGuo
 * @Date: 2021-03-15 09:11:57
 * @LastEditTime: 2021-03-15 14:46:22
 * @LastEditors: JveGuo
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
  StackNavigationProp,
} from '@react-navigation/stack';
// import Home from '@/pages/Home/Home';
// import Details from '@/pages/Details/Details';
import { Platform, StyleSheet } from 'react-native';
import BottomTabs from '@/navigator/BottomTabs';
import Test from '@/pages/Test/test';

export type RootStackParamsList = {
  BottomTabs: undefined;
  // Details: {
  //   id: number;
  // };
  Test: undefined;
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
          // 设置bar高度
          // headerStatusBarHeight: StatusBar.currentHeight,
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
          name="BottomTabs"
          options={{ title: '首页' }}
          component={BottomTabs}
        />
        <Stack.Screen
          name="Test"
          options={{ title: '测试页' }}
          component={Test}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
