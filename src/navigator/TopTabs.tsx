/*
 * @Description:
 * @Author: JveGuo
 * @Date: 2021-03-15 11:14:31
 * @LastEditTime: 2021-03-15 14:42:32
 * @LastEditors: JveGuo
 */
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '@/pages/Home/Home';

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <Tab.Navigator
      lazy
      tabBarOptions={{
        scrollEnabled: true,
        tabStyle: {
          width: 80,
        },
        indicatorStyle: {
          height: 4,
          width: 20,
          marginLeft: 30,
          borderRadius: 2,
          backgroundColor: '#f86442',
        },
        activeTintColor: '#f86442',
        inactiveTintColor: '#333',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: '推荐' }}
      />
      <Tab.Screen name="Home1" component={Home} />
      <Tab.Screen name="Home2" component={Home} />
    </Tab.Navigator>
  );
};

export default TopTabs;
