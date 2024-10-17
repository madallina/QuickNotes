import {useState} from 'react'
import { useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css'

function App() {
const [notes, setNotes]=useState([]);
const [newNote, setNewNote]=useState('');

useEffect(() => {
  const savedNotes = localStorage.getItem('notes');
  if (savedNotes) {
    setNotes(JSON.parse(savedNotes));
  }
}, []);


useEffect(() => {
  if (notes.length > 0) {
    localStorage.setItem('notes', JSON.stringify(notes));
  }
}, [notes]);


const addNote = () => {
  if (newNote.trim() !== '') {
    const newNoteObject={
      id: Date.now(),
      text : newNote,
  
    };
    setNotes([...notes, newNoteObject]);
    setNewNote(''); 
  }
};


const deleteNote = (id) => {
  const updatedNotes = notes.filter((note) => note.id !== id);
  setNotes(updatedNotes);
};

  return (
    <>
    <div>
      <h1>My notes</h1>
      <NoteForm newNote={newNote} setNewNote={setNewNote} addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
    </>
  )
}

export default App;
