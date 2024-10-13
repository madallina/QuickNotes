import {useState} from 'react'
import './App.css'

function App() {
const [notes, setNotes]=useState([]);

const addNote=(newNote)=>{
  setNotes([...notes,newNote]);
};

const deleteNote = (index)=>{
  const updateNotes= notes.filter((note,ind)=>i!==index);
  setNotes(updateNotes);
}
  return (
    <>
      
    </>
  )
}

export default App
