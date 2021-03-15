/*
 * @Description:
 * @Author: JveGuo
 * @Date: 2021-03-15 09:11:57
 * @LastEditTime: 2021-03-15 14:41:28
 * @LastEditors: JveGuo
 */
import React from 'react';
import Navigator from '@/navigator/index';
import { StatusBar } from 'react-native';

// export default Navigator;

const Index = () => {
  return (
    <>
      <Navigator />
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
    </>
  );
};

export default Index;
