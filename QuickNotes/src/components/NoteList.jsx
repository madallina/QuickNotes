import NoteItem from "./NoteItem";


function NoteList({notes,deleteNote}){
    return (
        <>
        <div>
            {notes.length === 0 ? (<p>Don't have any notices!</p>) :(
                notes.map((note,index)=>(
                    <NoteItem key={index} note={note} index={index} deleteNote={deleteNote}/>
                ))
            )}
        </div>
        </>
    );
}
export default NoteList;