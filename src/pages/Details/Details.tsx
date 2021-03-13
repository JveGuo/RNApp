import { RootStackParamsList } from '@/navigator/index';
import { RouteProp } from '@react-navigation/core';
import React from 'react';
import { Text, View } from 'react-native';

interface IProps {
  route: RouteProp<RootStackParamsList, 'Details'>;
}

const Details = (props: IProps) => {
  return (
    <View>
      <Text>Details</Text>
      <Text>{props.route.params.id}</Text>
    </View>
  );
};

export default Details;
