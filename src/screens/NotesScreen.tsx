import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { NoteItem } from '../components/NoteItem';
import { getData, storeData } from '../utils/storage';
import { Note } from '../types';

export const NotesScreen = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [noteText, setNoteText] = useState('');

  useEffect(() => {
    const loadNotes = async () => {
      const savedNotes = await getData('notes');
      if (savedNotes) {
        setNotes(savedNotes);
      }
    };
    loadNotes();
  }, []);

  const addNote = async () => {
    if (noteText.trim()) {
      const newNote = {
        id: Date.now().toString(),
        text: noteText.trim(),
      };
      const updatedNotes = [newNote, ...notes];
      setNotes(updatedNotes);
      await storeData('notes', updatedNotes);
      setNoteText('');
    }
  };

  const deleteNote = async (id: string) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    await storeData('notes', updatedNotes);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Notes</Text>
        <Text style={styles.headerSubtitle}>{notes.length} notes</Text>
      </View>

      <View style={styles.inputSection}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={noteText}
            onChangeText={setNoteText}
            placeholder="Write your note here..."
            placeholderTextColor="white"
            multiline
            textAlignVertical="top"
          />
        </View>
        <TouchableOpacity 
          style={[styles.addButton, !noteText.trim() && styles.addButtonDisabled]} 
          onPress={addNote}
          disabled={!noteText.trim()}
          activeOpacity={0.8}
        >
          <Text style={styles.addButtonText}>Add Note</Text>
        </TouchableOpacity>
      </View>
      
      {notes.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateIcon}>📝</Text>
          <Text style={styles.emptyStateTitle}>No notes yet</Text>
          <Text style={styles.emptyStateText}>Create your first note to get started</Text>
        </View>
      ) : (
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <NoteItem note={item} onDelete={deleteNote} />
          )}
          style={styles.notesList}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.notesListContent}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 24,
    backgroundColor: '#0f172a',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#ffffff',
    marginBottom: 4,
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#64748b',
    fontWeight: '500',
  },
  inputSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  inputContainer: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    marginBottom: 16,
    overflow: 'hidden',
  },
  input: {
    padding: 20,
    fontSize: 16,
    color: 'white',
    minHeight: 120,
    fontWeight: '400',
    lineHeight: 24,
  },
  addButton: {
    backgroundColor: '#6366f1',
    paddingVertical: 16,
    paddingHorizontal: 24,
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
  addButtonDisabled: {
    backgroundColor: '#374151',
    shadowOpacity: 0,
    elevation: 0,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyStateIcon: {
    fontSize: 64,
    marginBottom: 20,
  },
  emptyStateTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptyStateText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    lineHeight: 24,
  },
  notesList: {
    flex: 1,
  },
  notesListContent: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    
  },
});