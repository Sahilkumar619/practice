import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

type Props = {
  route: DetailScreenRouteProp;
};

export const DetailScreen: React.FC<Props> = ({ route }) => {
  const { itemName } = route.params;

 

  const specifications = [
    { label: 'Model', value: itemName },
    { label: 'Category', value: 'Premium Product' },
    { label: 'Availability', value: 'In Stock' },
    { label: 'Rating', value: '4.8/5 ' },
    { label: 'Reviews', value: '1,247 reviews' },
    { label: 'Warranty', value: '2 Years' },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />
      
      <View style={styles.heroSection}>
        <View style={styles.productIcon}>
          <Text style={styles.iconText}>📦</Text>
        </View>
        <Text style={styles.title}>{itemName}</Text>
        <Text style={styles.subtitle}>Premium Quality Product</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}></Text>
          <Text style={styles.ratingText}>4.8 (1,247 reviews)</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Product Description</Text>
        <Text style={styles.description}>
          This is a detailed overview of {itemName}. Our premium product combines 
          cutting-edge technology with exceptional design to deliver an outstanding 
          user experience. Crafted with attention to detail and built to last, 
          this product represents the perfect balance of functionality and aesthetics.
        </Text>
      </View>

      

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Specifications</Text>
        <View style={styles.specsContainer}>
          {specifications.map((spec, index) => (
            <View key={index} style={styles.specRow}>
              <Text style={styles.specLabel}>{spec.label}</Text>
              <Text style={styles.specValue}>{spec.value}</Text>
            </View>
          ))}
        </View>
      </View>

     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  heroSection: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
    backgroundColor: '#1e293b',
    marginBottom: 24,
  },
  productIcon: {
    width: 100,
    height: 100,
    borderRadius: 30,
    backgroundColor: 'rgba(99, 102, 241, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  iconText: {
    fontSize: 48,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 18,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: '500',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rating: {
    fontSize: 16,
  },
  ratingText: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: '500',
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 16,
    letterSpacing: -0.3,
  },
  description: {
    fontSize: 16,
    lineHeight: 26,
    color: '#94a3b8',
    fontWeight: '400',
  },
  featuresContainer: {
    gap: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  featureBullet: {
    fontSize: 16,
    color: '#10b981',
    fontWeight: '700',
    marginRight: 12,
    width: 20,
  },
  featureText: {
    fontSize: 16,
    color: '#e2e8f0',
    fontWeight: '500',
    flex: 1,
  },
  specsContainer: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  specRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  specLabel: {
    fontSize: 16,
    color: '#94a3b8',
    fontWeight: '500',
  },
  specValue: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
  },
  actionSection: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    gap: 16,
  },
  primaryButton: {
    backgroundColor: '#6366f1',
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#6366f1',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  secondaryButtonText: {
    color: '#e2e8f0',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});