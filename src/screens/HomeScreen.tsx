import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';

const { width, height } = Dimensions.get('window');

export const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.subText}>Choose your workspace</Text>
      </View>
      
      <View style={styles.cardContainer}>
        <TouchableOpacity 
          style={[styles.card, styles.notesCard]}
          onPress={() => navigation.navigate('Notes')}
          activeOpacity={0.85}
        >
          <View style={styles.cardIcon}>
            <Text style={styles.iconText}>📝</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Notes App</Text>
            <Text style={styles.cardSubtitle}>Capture your thoughts and ideas</Text>
          </View>
          <View style={styles.cardAccent} />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.card, styles.listCard]}
          onPress={() => navigation.navigate('List')}
          activeOpacity={0.85}
        >
          <View style={styles.cardIcon}>
            <Text style={styles.iconText}>📋</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>List App</Text>
            <Text style={styles.cardSubtitle}>Organize and manage your tasks</Text>
          </View>
          <View style={styles.cardAccent} />
        </TouchableOpacity>
      </View>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    paddingVertical: 50,
    alignItems: 'center',
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 48,
    fontWeight: '900',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 12,
    letterSpacing: -1.5,
  },
  subText: {
    fontSize: 18,
    color: '#9ca3af',
    textAlign: 'center',
    fontWeight: '400',
    opacity: 0.8,
  },
  cardContainer: {
    flex: 1,
    gap: 24,
    
  },
  card: {
    borderRadius: 24,
    padding: 28,
    position: 'relative',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    minHeight: 160,
    flexDirection: 'row',
    alignItems: 'center',
  },
  notesCard: {
    backgroundColor: '#1e293b',
    shadowColor: '#6366f1',
  },
  listCard: {
    backgroundColor: '#1f2937',
    shadowColor: '#ec4899',
  },
  cardIcon: {
    width: 70,
    height: 70,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  iconText: {
    fontSize: 32,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  cardSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.75)',
    fontWeight: '400',
    lineHeight: 24,
  },
  cardAccent: {
    position: 'absolute',
    top: -20,
    right: -20,
    width: 120,
    height: 120,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 60,
  },
  footer: {
    paddingTop: 30,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 15,
    color: '#6b7280',
    fontWeight: '500',
    opacity: 0.7,
  },
});