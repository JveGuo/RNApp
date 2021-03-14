import { RootStackNavigation } from '@/navigator/index';
import React from 'react';
import { Button, Text, View } from 'react-native';

interface IProps {
  navigation: RootStackNavigation;
}

const Home = (props: IProps) => {
  // 点击事件
  const handlePress = () => {
    const { navigation } = props;
    navigation.navigate('Test');
  };

  return (
    <View>
      <Text>Home</Text>
      <Button title="跳转到测试" onPress={handlePress} />
    </View>
  );
};

export default Home;
