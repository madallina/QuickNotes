import NoteItem from "./NoteItem";


function NoteList({notes,deleteNote}){
    return (
        <>
        <div>
            {notes.length === 0 ? (
                <p>Don't have any notices!</p>
            ) :(
                notes.map((note)=>(
                    <NoteItem key={note.id} note={note}  deleteNote={deleteNote}/>
                ))
            )}
        </div>
        </>
    );
}
export default NoteList;