
function NoteItem({note,deleteNote}){
    return (
    <>
    <div>
        <p>{note.text}</p>
        <button onClick={()=>deleteNote(note.id)}>Delete</button>
    </div>
    </>
    );
}
export default NoteItem;