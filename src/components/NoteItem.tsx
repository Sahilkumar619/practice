import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Note } from '../types';

type NoteItemProps = {
  note: Note;
  onDelete: (id: string) => void;
};

export const NoteItem: React.FC<NoteItemProps> = ({ note, onDelete }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{note.text}</Text>
      <TouchableOpacity onPress={() => onDelete(note.id)} style={styles.deleteButton}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  deleteButton: {
    backgroundColor: '#ff4444',
    padding: 8,
    borderRadius: 5,
  },
  deleteText: {
    color: 'white',
  },
});
