
function NoteItem({note,index,deleteNote}){
    return (
    <>
    <div>
        <p>{note}</p>
        <button onClick={()=>deleteNote(index)}>Delete</button>
    </div>
    </>
    );
}
export default NoteItem;