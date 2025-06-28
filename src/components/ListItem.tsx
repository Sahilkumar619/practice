import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ListItem } from '../types';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';

type ListItemProps = {
  item: ListItem;
};

export const ListItemComponent: React.FC<ListItemProps> = ({ item }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate('Detail', { itemName: item.name })}
      style={styles.container}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    
  },
  description: {
    fontSize: 15,
    color: 'white',
  },
});
