
function NoteForm({newNote,setNewNote,addNote}){
    return (
        <>
        <div>
            <input
            id="noteInput"
            type="text"
            value={newNote}
            onChange={(e)=>setNewNote(e.target.value)}
            placeholder='Write here a notice'
            />
           <button id="addNoteButton" onClick={addNote}>Add note</button>
        </div>
        </>
    );
}
export default NoteForm;